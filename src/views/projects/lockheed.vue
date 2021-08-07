<template>
    <div class="lockheed">
        <ProjectHeader :projectInfo="projectInfo" />
        <ProjectArticle>
            <ProjectSection>
                <template #title>Pitch</template>
                <p>
                    Minim cillum excepteur ullamco est. Sit nisi sunt fugiat magna fugiat aliquip quis voluptate esse ea dolore sunt. Reprehenderit id adipisicing ea ex sunt esse ea commodo. Minim nulla duis reprehenderit excepteur aliquip ut tempor ad proident culpa cillum sint do. Ea ipsum labore aute laboris aliquip aliqua dolore. Ullamco elit veniam aute commodo reprehenderit aute labore.
                </p>
                <p>
                    Proident anim sit in dolor esse veniam ea cillum dolor voluptate enim esse aute sunt. Aute aute occaecat aliqua non Lorem culpa est sunt nulla excepteur deserunt eiusmod aliquip consectetur. Adipisicing nostrud labore ut ea ea nostrud fugiat excepteur occaecat ullamco ut reprehenderit dolore. Commodo mollit qui veniam dolor anim. Occaecat magna commodo fugiat tempor ea consequat dolore ipsum. Id fugiat aliqua ex eiusmod duis non irure dolore laboris.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Design</template>
                <p>
                    Reprehenderit exercitation laborum eu commodo exercitation. Dolore officia reprehenderit et dolore excepteur. Cillum fugiat ad labore ut amet nisi laborum commodo do ut.
                </p>
                <p>
                    Non consectetur minim adipisicing voluptate. Ex Lorem consectetur minim ex tempor. Duis magna ullamco nulla veniam.
                </p>
                <p>
                    Deserunt nostrud labore nostrud esse. Officia mollit laborum commodo consequat aliquip elit aliquip ut cillum mollit esse. Mollit labore incididunt et nisi consequat. Qui minim ullamco laborum irure. Cillum elit aliquip exercitation anim amet sint in excepteur veniam ipsum aliqua.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Deliverable</template>
                <p>
                    Et deserunt sunt consequat tempor elit. Officia dolor tempor eu id. Eiusmod ullamco voluptate cupidatat laborum enim incididunt cupidatat. Cupidatat et Lorem ut qui sunt exercitation fugiat duis ex sunt pariatur adipisicing veniam amet. Quis nisi aliqua duis mollit culpa ex nulla mollit nulla ut ad laboris reprehenderit. Nostrud ea nostrud incididunt aute voluptate dolore ex mollit irure elit sunt id tempor nisi.
                </p>
                <!-- Insert the demo video here -->
                <p>
                    Cillum ut veniam eu sint sunt nulla. Dolore occaecat enim in id magna voluptate nulla sit qui dolor adipisicing duis fugiat laboris. Ullamco consequat enim occaecat proident enim ex anim. Occaecat labore Lorem excepteur consequat. Do culpa velit veniam voluptate sint voluptate.
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
    name: "lockheed",
    components: {
        ProjectHeader,
        ProjectArticle,
        ProjectSection,
        ProjectInfoBox
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["lockheed"]
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

.lockheed {
    .content-width;
}
</style>