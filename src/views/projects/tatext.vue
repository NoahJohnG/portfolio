<template>
    <div class="tatext">
        <ProjectHeader :projectInfo="projectInfo"/>
    </div>
</template>

<script lang="ts">
import ProjectHeader from "@/components/project-header.vue";
import { ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "tatext",
    components: {
        ProjectHeader
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["tatext"]
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

.tatext {
    &:extend(.content-width);
}
</style>