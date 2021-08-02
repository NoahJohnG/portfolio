<template>
    <div class="chess">
        <ProjectHeader :projectInfo="projectInfo" />
    </div>
</template>

<script lang="ts">
import ProjectHeader from "@/components/project-header.vue";
import { ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "chess",
    components: {
        ProjectHeader
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["chess"]
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
</style>