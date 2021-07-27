<template>
    <a class="project-tile" @mouseover="hover = true" @mouseleave="hover = false">
        <div class="tile-overlay" v-if="!hover">
            <h3>{{ summary.name }}</h3>
        </div>
        <div class="tile-info" v-if="hover">
            <h3>{{ summary.name }}</h3>
            <span>{{ summary.description }}</span>
        </div>
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectTile",
    props: ["summary"],
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
    border-radius: 20px;
    display: flex;
    margin: 2em;
}

.tile-content {
    display: flex;
    flex-direction: column;
    flex: 1 0;
    justify-content: center;
    align-items: center;
    padding: @std-padding;
}

.tile-overlay {
    &:extend(.tile-content);
    background-color: fade(@primary-color, 70%);
}

.tile-info {
    &:extend(.tile-content);
    gap: 2em;
}
</style>
