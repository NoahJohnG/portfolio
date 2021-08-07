<template>
    <div class="intel">
        <ProjectHeader :projectInfo="projectInfo"/>
        <ProjectArticle>
            <ProjectSection>
                <template #title>Opportunity</template>
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
            <ProjectSection>
                <template #title>Execution</template>
                <ProjectSection>
                    <template #title>Clean Compilation</template>
                    <p>
                        Cillum Lorem do aute aliqua id ullamco incididunt elit. Voluptate deserunt veniam deserunt dolor mollit labore est ullamco est. Fugiat voluptate do dolore consectetur ut duis laborum duis aute ipsum nulla proident nisi sint. Et fugiat qui in eu elit aliqua anim. Ad eu sit velit veniam. Nisi eu in anim officia aliqua. Do tempor ipsum tempor ut non nostrud.
                    </p>
                    <p>
                        Occaecat nostrud officia occaecat sint duis sit dolore in aliquip ullamco ut ex anim consectetur. Consectetur elit consequat minim nisi laboris sunt enim. Proident duis elit ipsum in magna enim ipsum non. Proident consectetur culpa culpa officia culpa proident non enim nulla ea sit cupidatat ea fugiat.
                    </p>
                </ProjectSection>
                <ProjectSection>
                    <template #title>Assembly</template>
                    <p>
                        Qui nisi sit laboris dolore incididunt commodo cillum ipsum ea id eiusmod laborum amet. Sint tempor esse irure incididunt nisi ea amet excepteur id ex esse. Sit fugiat magna ullamco enim irure. Ut officia consequat laborum adipisicing sit nisi quis laborum.
                    </p>
                    <p>
                        Consectetur Lorem nulla in quis quis nisi. Reprehenderit qui id velit eu consequat id aliqua ad magna nulla id enim ea Lorem. Id est incididunt ullamco cillum veniam eu mollit excepteur pariatur eu voluptate et.
                    </p>
                </ProjectSection>
                <ProjectSection>
                    <template #title>Code Size</template>
                    <p>
                        Ad veniam incididunt mollit elit deserunt do aute amet. Minim exercitation mollit nostrud in Lorem pariatur officia tempor mollit adipisicing mollit. Dolor laboris nostrud dolor sit et qui dolore est pariatur ea velit ex ut aliqua.
                    </p>
                </ProjectSection>
            </ProjectSection>
            <ProjectSection>
                <template #title>Code Review</template>
                <p>
                    Officia nisi exercitation sint aliqua aliquip esse cillum consequat minim sint nostrud velit sit pariatur. Ad commodo officia do exercitation nisi eu. Laborum enim dolore tempor aliquip duis ad velit nostrud duis fugiat consectetur dolor. Anim irure dolore commodo cupidatat Lorem Lorem Lorem non do. Veniam velit do amet sit culpa aute id dolore fugiat anim ipsum duis nostrud. Quis veniam eiusmod fugiat esse eiusmod voluptate est deserunt reprehenderit ea veniam dolore ut.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Impact</template>
                <p>
                    Adipisicing occaecat enim labore id nostrud est ipsum proident incididunt occaecat tempor elit cillum. Magna Lorem esse enim irure. Lorem consequat et magna id quis irure. Laboris non occaecat pariatur Lorem eu sint. Aliqua est et id minim irure quis aliqua.
                </p>
                <p>
                    Excepteur quis ea velit sunt. Aliqua occaecat eiusmod amet aute incididunt voluptate occaecat eu aliqua non cupidatat. Elit non eu labore ad id do non sint nostrud. Nisi dolore cupidatat exercitation esse dolore velit ipsum. Elit excepteur duis est laboris laboris est nostrud aute in ut. Ex eu qui adipisicing magna aute dolor. Proident commodo occaecat cupidatat pariatur enim adipisicing consequat proident anim cillum.
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
    name: "intel",
    components: {
        ProjectHeader,
        ProjectArticle,
        ProjectSection,
        ProjectInfoBox
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["intel"]
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

.intel {
    .content-width;
}
</style>