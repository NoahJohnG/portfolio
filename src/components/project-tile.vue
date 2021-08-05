<template>
    <router-link :to="'/projects/' + view" class="project-tile" @mouseover="hover = true" @mouseleave="hover = false">
        <div class="tile-overlay" v-if="!hover">
            <h3>{{ projectInfo.name }}</h3>
        </div>
        <div class="tile-info" v-if="hover">
            <h3>{{ projectInfo.name }}</h3>
            <span>{{ summary100 }}</span>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectTile",
    props: ["view", "projectInfo"],
    computed: {
        summary100: function(): string {
            // Returns project summary sliced to a max of 100 characters
            if (this.projectInfo.summary.length > 100)
            {
                // Find last whole word that fits in 100 char limit
                for (var _i = 97; this.projectInfo.summary[_i] != " "; _i--);

                return this.projectInfo.summary.slice(0, _i) + "...";
            }
            
            return this.projectInfo.summary;
        }
    },
    data() {
        return {
            hover: false
        }
    }
});
</script>

<style lang="less" scoped>
@import "@/global.less";

.project-tile {
    background-image: linear-gradient(0deg, darken(@tertiary-color, 20%), @tertiary-color);
    height: 500px;
    width: 400px;
    overflow: hidden;
    border-radius: 20px;
    display: flex;
    margin: 1em;
}

.tile-content {
    display: flex;
    flex-direction: column;
    flex: 1 0;
    padding: @std-padding;
    justify-content: center;
}

.tile-overlay {
    &:extend(.tile-content);
    align-items: center;
    background-color: fade(@primary-color, 70%);
}

.tile-info {
    &:extend(.tile-content);
    gap: 1em;
}
</style>
