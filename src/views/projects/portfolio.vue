<template>
    <div class="portfolio">
        <ProjectHeader :projectInfo="projectInfo"/>
        <ProjectArticle>
            <ProjectSection>
                <template #title>Goal</template>
                <p>
                    Ad reprehenderit sunt cupidatat pariatur eiusmod ipsum est ex laborum. Exercitation aliquip exercitation fugiat anim veniam tempor dolore. Duis incididunt mollit ipsum mollit ullamco. Ullamco in consequat proident velit veniam consequat ut anim est cupidatat ut aliquip exercitation. Reprehenderit consequat nulla nulla minim et labore. Tempor aute esse laborum magna magna. Fugiat sit ea ea eiusmod nulla qui excepteur eu nostrud culpa et laborum commodo.
                </p>
                <p>
                    In commodo veniam amet veniam. Lorem quis nisi proident aliquip nulla deserunt pariatur aute laboris qui duis amet sunt. Nisi esse adipisicing aliqua culpa sint.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Design</template>
                <p>
                    Lorem in proident eiusmod sint. Sit ullamco aliquip cillum eiusmod cillum adipisicing velit duis ut proident. Ullamco culpa dolor fugiat quis ut ullamco. Ea eu exercitation sunt est consequat. Est veniam id nostrud consectetur voluptate nostrud mollit qui anim ad nulla officia aliqua. Minim eu dolore exercitation mollit officia eu sint irure quis.
                </p>
                <p>
                    Dolor dolore sint qui cillum ullamco ex occaecat eiusmod ex cupidatat velit veniam in. Adipisicing nulla aute est dolor esse incididunt aliqua ut aute laborum mollit duis. In ex cillum esse labore.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Going Forward</template>
                <p>
                    Occaecat do sint laborum aliquip nulla ut. Enim eiusmod aliquip ex exercitation quis ea eu aute sit sit consectetur incididunt officia eu. Dolor dolor officia sunt sunt veniam ex magna sint aliquip irure aliqua quis. Non consequat Lorem irure cillum ipsum consectetur mollit laborum in adipisicing qui.
                </p>
                <p>
                    Magna in velit aliquip consequat nisi ad do ex reprehenderit cillum proident ea dolor. Do quis incididunt cillum sit Lorem amet fugiat laborum aute dolor quis proident. Ea sunt ea magna tempor ea deserunt incididunt exercitation ipsum Lorem occaecat sunt. Nulla dolore pariatur fugiat ea incididunt mollit enim. Et ad ad do sit esse officia sint officia consequat laboris magna sit laboris. Reprehenderit laborum dolore minim aliqua do elit sit.
                </p>
                <p>
                    Proident esse incididunt cupidatat aliquip irure in enim aliqua Lorem. Ea esse et cillum minim aute nostrud labore culpa consectetur. Occaecat ipsum occaecat ad pariatur eiusmod consequat magna labore amet ipsum laboris laboris eu laborum. Ut anim tempor aliquip ex eu.
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
    name: "portfolio",
    components: {
        ProjectHeader,
        ProjectArticle,
        ProjectSection,
        ProjectInfoBox
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
    .content-width;
}
</style>