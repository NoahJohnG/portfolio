<template>
    <div id="home">
        <h1>Hi, I'm Noah</h1>
        <h3>This is my portfolio website</h3>
        <a href="#content" class="down-arrow bounce" />
        <div id="content">
            <div class="project-tiles">
                <ProjectTile :key="key" v-for="(val, key) in projectList" :view="key" :description="val" class="router-link" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ProjectTile from "@/components/project-tile.vue";
import { ViewName, ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    components: {
        ProjectTile
    },
    computed: {
        projectList: function(): Record<ViewName, ProjectDescription> {
            return this.$store.state.projectList
        }
    },
    data() {
        return {
        }
    }
});
</script>

<style lang="less" scoped>
@import "@/global.less";

#home {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #content {
        background-image: linear-gradient(0deg, darken(@primary-color, 5%), @primary-color);
        position: absolute;
        top: 100vh;
        width: 100%;

        .project-tiles {
            &:extend(.content-width);

            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    }
}

@keyframes bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

.down-arrow {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -25px;

    background: url("https://cdn-blmce.nitrocdn.com/JacqyZFxQpwHdBhotwjfAiEYlUcIzQnR/assets/static/optimized/rev-bd73137/wp-content/themes/loungelizard/assets/images/down@2x.png") no-repeat center;
    background-size: 100%;
    width: 50px;
    height: 25px;

    animation: bounce 0.5s ease-out alternate infinite;
}
</style>