<template>
    <div class="lockheed">
        <ProjectHeader />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectHeader from "@/components/project-header.vue";

export default defineComponent({
    name: "lockheed",
    components: {
        ProjectHeader
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