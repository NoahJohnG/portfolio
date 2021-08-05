<template>
    <article class="project-article">
        <slot></slot>
    </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectArticle"
});
</script>

<style lang="less" scoped>
@import "@/global.less";

.project-article {
    background: @content-background;
    border-radius: 5px;
    padding: 1em;
    font-size: 1.25em;
}
</style>