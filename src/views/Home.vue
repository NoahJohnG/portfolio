<template>
    <div id="home">
        <h1>Hi, I'm Noah</h1>
        <h3>This is my portfolio website</h3>
        <div class="content">
            <div class="project-tiles">
                <ProjectTile :key="project.name" v-for="project in projectList" :summary="project" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectJSON from "@/data.json";

import ProjectTile from "@/components/project-tile.vue";

export default defineComponent({
    name: "Home",
    components: {
        ProjectTile
    },
    data() {
        return {
            projectList: ProjectJSON,
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

    .content {
        background-image: linear-gradient(0deg, darken(@primary-color, 5%), @primary-color);
        position: absolute;
        top: 100vh;
        width: 100%;

        .project-tiles {
            max-width: @max-content-width;
            width: 90%;
            margin: 0 auto;

            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    }
}
</style>