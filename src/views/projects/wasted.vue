<template>
    <div class="wasted">
        <ProjectHeader :projectInfo="projectInfo" />
        <ProjectArticle>
            <ProjectSection>
                <template #title>Introduction</template>
                <p>
                    Ad reprehenderit sunt cupidatat pariatur eiusmod ipsum est ex laborum. Exercitation aliquip exercitation fugiat anim veniam tempor dolore. Duis incididunt mollit ipsum mollit ullamco. Ullamco in consequat proident velit veniam consequat ut anim est cupidatat ut aliquip exercitation. Reprehenderit consequat nulla nulla minim et labore. Tempor aute esse laborum magna magna. Fugiat sit ea ea eiusmod nulla qui excepteur eu nostrud culpa et laborum commodo.
                </p>
                <p>
                    Mollit ad sunt reprehenderit nostrud id aute aute excepteur. Tempor commodo nisi consectetur consectetur esse fugiat. Incididunt Lorem incididunt minim sit id eu esse non dolor aliqua.
                </p>
                <p>
                    In commodo veniam amet veniam. Lorem quis nisi proident aliquip nulla deserunt pariatur aute laboris qui duis amet sunt. Nisi esse adipisicing aliqua culpa sint.
                </p>
            </ProjectSection>
        </ProjectArticle>
        <ProjectInfoBox :projectInfo="projectInfo" />
        <br>
    </div>
</template>

<script lang="ts">
import ProjectInfoBox from "@/components/project-info-box.vue";
import ProjectArticle from "@/components/project-article.vue";
import ProjectSection from "@/components/project-section.vue";
import ProjectHeader from "@/components/project-header.vue";
import { ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "wasted",
    components: {
        ProjectHeader,
        ProjectArticle,
        ProjectSection,
        ProjectInfoBox
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