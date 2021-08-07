<template>
    <div class="wasted">
        <ProjectHeader :projectInfo="projectInfo" />
        <ProjectArticle>
            <ProjectSection>
                <template #title>Introduction</template>
                <p>
                    Ullamco sint pariatur ullamco proident excepteur laborum nisi fugiat minim. Aute dolor labore esse irure veniam culpa culpa cillum excepteur est. Pariatur nisi et tempor ullamco aute eu. Nostrud tempor nisi Lorem amet.
                </p>
                <p>
                    Veniam excepteur veniam anim nisi ullamco ullamco non cillum anim in. Lorem non excepteur ex sint magna anim labore aliquip ad voluptate elit exercitation est. Minim cillum deserunt incididunt id sunt velit. Aute irure eu reprehenderit sit labore. Ut exercitation duis non incididunt ut laboris exercitation qui eiusmod culpa. Nisi minim eiusmod tempor consectetur consectetur cupidatat anim et.
                </p>
                <p>
                    Anim consectetur quis excepteur officia aliqua. Cupidatat cillum consequat consequat excepteur sint aliqua. 
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Results</template>
                <p>
                    Ad dolor anim eiusmod et do irure minim officia sunt. Labore ut non adipisicing eu irure exercitation aute minim reprehenderit aute ipsum.
                </p>
                <p>
                    Quis consectetur est labore in deserunt sunt tempor ut consequat mollit exercitation aute. Officia minim enim qui nulla labore nostrud in mollit eiusmod.
                </p>
                <p>
                    Ullamco et qui deserunt ex mollit ut voluptate labore.
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