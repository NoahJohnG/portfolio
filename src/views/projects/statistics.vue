<template>
    <div class="statistics">
        <ProjectHeader :projectInfo="projectInfo" />
        <ProjectArticle>
            <ProjectSection>
                <template #title>Context</template>
                <p>
                    Ad reprehenderit sunt cupidatat pariatur eiusmod ipsum est ex laborum. Exercitation aliquip exercitation fugiat anim veniam tempor dolore. Duis incididunt mollit ipsum mollit ullamco. Ullamco in consequat proident velit veniam consequat ut anim est cupidatat ut aliquip exercitation. Reprehenderit consequat nulla nulla minim et labore. Tempor aute esse laborum magna magna. Fugiat sit ea ea eiusmod nulla qui excepteur eu nostrud culpa et laborum commodo.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Deliverable</template>
                <p>
                    Tempor voluptate aliqua quis mollit do magna consectetur cillum consectetur ut officia nostrud mollit officia. Ea duis sunt do laborum ad labore irure anim non elit tempor nostrud qui. Minim dolore enim incididunt amet nostrud. Non exercitation officia ipsum eiusmod tempor magna minim qui adipisicing. Excepteur enim eiusmod laborum irure esse labore eu magna sunt nostrud ex. Laborum veniam esse nostrud esse et excepteur id sunt enim nostrud Lorem in. Occaecat duis aute deserunt laborum tempor quis deserunt.
                </p>
                <!-- Try to embed app here -->
                <p>
                    Duis anim Lorem dolor quis incididunt. Velit cillum commodo nulla adipisicing. Tempor elit fugiat et fugiat sint nisi nulla irure dolore tempor voluptate do adipisicing voluptate. Pariatur nostrud voluptate sint voluptate ullamco officia laboris ad do. Ut proident cupidatat nulla tempor nulla nulla nostrud ut non laborum.
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
    name: "statistics",
    components: {
        ProjectHeader,
        ProjectArticle,
        ProjectSection,
        ProjectInfoBox
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["statistics"]
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

.statistics {
    .content-width;
}
</style>