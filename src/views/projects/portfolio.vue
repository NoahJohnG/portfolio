<template>
    <div class="portfolio">
        <ProjectHeader :projectInfo="projectInfo"/>
    </div>
</template>

<script lang="ts">
import ProjectHeader from "@/components/project-header.vue";
import { ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "portfolio",
    components: {
        ProjectHeader
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["portfolio"]
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

.portfolio {
    &:extend(.content-width);
}
</style>