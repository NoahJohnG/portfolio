<template>
    <div class="chess">
        <ProjectHeader :projectInfo="projectInfo" />
        <ProjectArticle>
            <ProjectSection>
                <template #title>Introduction</template>
                <p>
                    This project aims to bring the experience of playing chess back to reality and away from the screen.
                    As technology has advanced innovators have found many advantages in designing virtual chess programs.
                    A major one of these advantages is artificial intelligenc. AI expands the possibilities for the player
                    by providing an ever-present opponent who can meet them at their desired skill level, analysze their gameplay,
                    and even provide suggestions. By creating a board that can detect the state of the pieces on top of it,
                    these advantages can be maintained while retuirning to a more traditional, intuitive, and comfortable play setting.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Background</template>
                <p>
                    It is important to note that there is another product on the market that is very similar to the one being
                    discussed here. This product, SquareOff's Smart Chessboard, was not the inspiration for the Physical
                    Chess AI, but it did help in the design of the engineering specifications. It was ovserved that SquareOff's
                    design used some sort of button underneath each square on the chess board to track the pieces, but this
                    method comes with some downsides. Thier traciking method seem sto disrupt the typical flow of playing
                    chess ad calls attention to the fact that the user is not using a typical chess board. In designing the
                    Physical Chess AI, the pieces tracking method was chosen in part to supply the user with the most intuitive
                    and natural gameplay experience. Another specification taken from observation of SquareOff's chessboard
                    was independence from an app. Again, this goal was set in the pursuit of getting as close as possible to
                    the feling of a traditional chessboard. As was mentioned earlier, one of the largest draws of this design
                    is that it brings chess off the screen and backk onto a board. Having it too closely tied to an app betrays
                    that ideal.
                </p>
            </ProjectSection>
            <ProjectSection>
                <template #title>Project Design</template>
                <ProjectSection>
                    <template #title>Sensing</template>
                    <p>
                        The first question that needed to be addressed during development regarded how the pieces and movements were going to sensed.
                        This asspect of the design is critical for the user experience as well as ease of use and efficiency for the device itself.
                        Inaccurate and unreliable data from the board's sensors would introduce unnecessary complexity in the underlying firmware to compensate.
                        In addition, although not crucial to comppleting the baseline project, it would be preferable to choose a method that has
                        the potential to distinguish piecees from one anoother.
                    </p>
                </ProjectSection>
            </ProjectSection>
        </ProjectArticle>
        <br>
    </div>
</template>

<script lang="ts">
import ProjectHeader from "@/components/project-header.vue";
import ProjectArticle from "@/components/project-article.vue";
import ProjectSection from "@/components/project-section.vue";
import { ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "chess",
    components: {
        ProjectHeader,
        ProjectArticle,
        ProjectSection
    },
    computed: {
        projectInfo: function(): ProjectDescription {
            return this.$store.state.projectList["chess"]
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

.chess {
    &:extend(.content-width);
}
</style>