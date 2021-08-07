<template>
    <div class="tatext">
        <ProjectHeader :projectInfo="projectInfo"/>
        <ProjectArticle>
            <ProjectSection>
                <template #title>Introduction</template>
                <p>
                    Sint mollit esse ex tempor minim est ex laborum. Exercitation aliquip exercitation fugiat anim veniam tempor dolore. Duis incididunt mollit ipsum mollit ullamco. Ullamco in consequat proident velit veniam consequat ut anim est cupidatat ut aliquip exercitation. Reprehenderit consequat nulla nulla minim et labore. Tempor aute esse laborum magna magna. Fugiat sit ea ea eiusmod nulla qui excepteur eu nostrud culpa et laborum commodo.
                </p>
                <p>
                    Ex exercitation irure minim mollit ea nisi nulla cupidatat officia. Aute ullamco ea duis voluptate pariatur eiusmod quis pariatur elit elit reprehenderit. Aliqua magna laborum sunt laboris magna eu ad ad fugiat et exercitation exercitation do. Mollit labore mollit mollit ullamco Lorem laboris reprehenderit nostrud reprehenderit occaecat excepteur. Ex duis ad eiusmod nisi occaecat laboris occaecat quis sint proident veniam anim quis.
                </p>
                <p>
                    Dolore excepteur esse ad velit non proident anim tempor aliqua. Tempor magna irure nulla nulla laboris. Ipsum enim qui enim culpa minim reprehenderit culpa.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Version One</template>
                <p>
                    Dolore anim cupidatat magna labore ea aliqua do minim culpa. Nulla irure officia non quis magna excepteur duis cupidatat tempor ullamco pariatur. Minim quis do veniam irure. Pariatur excepteur sit incididunt qui reprehenderit ea proident nulla eu qui. Laborum mollit irure elit tempor id excepteur veniam nisi culpa incididunt sit adipisicing aliqua amet.
                </p>
                <p>
                    Incididunt laborum voluptate elit pariatur sunt cillum et ipsum aute sunt laborum nulla. Minim sint in proident incididunt deserunt magna do. Qui cupidatat qui veniam enim cupidatat culpa consectetur labore eu tempor elit. Fugiat sint labore minim culpa laboris.
                </p>
                <p>
                    Sunt ea ea esse labore ea reprehenderit ad pariatur voluptate officia do est laboris. Ea quis amet mollit ex deserunt ullamco magna labore nisi eiusmod cupidatat anim irure. Magna enim eiusmod ut consectetur dolor officia ad.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Version Two</template>
                <p>
                    Duis ea duis exercitation ea irure cillum deserunt ullamco fugiat sit irure. Cillum voluptate exercitation ex deserunt. Velit pariatur velit dolore sint aliquip laboris. Eu cupidatat laborum velit pariatur dolor quis occaecat excepteur.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Value</template>
                <p>
                    Velit ea officia proident velit ut nostrud ullamco Lorem. Fugiat cupidatat anim Lorem ipsum in. Aliqua qui nisi velit sunt velit dolor voluptate ad laborum non ea culpa officia nostrud. Exercitation nisi nisi tempor laboris deserunt consectetur. Tempor Lorem nostrud laborum reprehenderit ullamco dolor enim proident ad ad ullamco cillum esse. Nostrud commodo nulla reprehenderit labore adipisicing deserunt dolor culpa labore ex.
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
    name: "tatext",
    components: {
        ProjectHeader,
        ProjectArticle,
        ProjectSection,
        ProjectInfoBox
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
    .content-width;
}
</style>