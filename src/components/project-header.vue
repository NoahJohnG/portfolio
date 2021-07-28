<template>
    <div class="project-header">
        <h1>{{ name }}</h1>
        <span>{{ role }} • {{ skills }} • {{ year }}</span>
        <img :src="image" loading="lazy"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectHeader",
    props: ["name", "role", "skills", "year", "image"]
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
