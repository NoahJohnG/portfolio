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
    margin: 0 15%;
    padding: 1em;

    font-size: 1.25em;
    line-height: 1.5em;

    @media ( max-width: 767px ) {
        & {
            margin: 0 5%;
        }
    }
}
</style>