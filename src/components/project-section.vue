<template>
    <section class="project-section">
        <h2>
            <slot name="title"></slot>
        </h2>
        <div class="text">
            <slot></slot>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectSection"
});
</script>

<style lang="less" scoped>
@import "@/global.less";

.project-section {
    margin-bottom: 1em;
    font-size: 0.8em;

    .text {
        padding-top: 1em;
        padding-left: 1em;
    }
}
</style>