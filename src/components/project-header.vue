<template>
    <div class="project-header">
        <h1>{{ projectInfo.name }}</h1>
        <ul>
            <li :key="keyword" v-for="keyword in projectInfo.keywords">{{ keyword }}</li>
        </ul>
        <p>{{ projectInfo.summary }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectHeader",
    props: ["projectInfo"]
});
</script>

<style lang="less" scoped>
@import "@/global.less";

.project-header {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
        margin: @std-padding 0;
        font-size: 3em;
    }

    ul {
        margin: @std-padding 0;
        list-style-type: none;
        display: flex;
        
        li {
            margin: 0 @std-padding 0 0;
            padding: @std-padding - 3px;
            background-color: @tertiary-color;
            border-radius: 1em;
            font-size: 0.8em;
        }
    }

    p {
        margin: @std-padding 0;
        max-width: 750px;
    }
}
</style>
