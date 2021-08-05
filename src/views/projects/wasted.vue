<template>
    <div class="wasted">
        <ProjectHeader :projectInfo="projectInfo" />
    </div>
</template>

<script lang="ts">
import ProjectHeader from "@/components/project-header.vue";
import { ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "wasted",
    components: {
        ProjectHeader
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["wasted"]
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

.wasted {
    .content-width;
}
</style>