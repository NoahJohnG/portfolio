<template>
    <div class="project-info-box">
        <div class="fill">
            <h4>Role</h4>
            <p>{{ projectInfo.role }}</p>
            <h4>Org</h4>
            <ul>
                <li :key="org" v-for="org in projectInfo.orgs">{{ org }}</li>
            </ul>
            <h4>Timeline</h4>
            <p>
                {{ projectInfo.start.toLocaleString("default", {month: "short", year: "numeric"}) }}
                <span v-if="projectInfo.end">- {{ projectInfo.end.toLocaleString("default", {month: "short", year: "numeric"}) }}</span>
                <span v-else-if="!projectInfo.finished">- TBD</span>
            </p>
        </div>
        <div class="fill">
            <h4>Team</h4>
            <ul v-if="projectInfo.team">
                <li :key="name" v-for="(link, name) in projectInfo.team">
                    <a v-if="link.length" :href="link" target="_blank" rel="noreferrer noopener">{{ name }}</a>
                    <span v-else>{{ name }}</span>
                </li>
            </ul>
            <ul v-else>
                <li>Me</li>
                <li>Myself</li>
                <li>I</li>
            </ul> </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectInfoBox",
    props: ["projectInfo"]
});
</script>

<style lang="less" scoped>
@import "@/global.less";

.project-info-box {
    background: @content-background;
    display: flex;
    border-radius: 5px;
    margin: 4em 25% 4em;
    padding: 1em;

    @media ( max-width: 767px ) {
        & {
            margin: 4em 10% 4em;
        }
    }

    .fill {
        flex-grow: 1;
    }

    h4 {
        color: @tertiary-color;
        text-transform: uppercase;

        margin: 0.8em 0;
    }

    .text() {
        margin: 0.6em 0;
        padding-inline-start: 10px;
    }

    p {
        .text;
    }

    ul {
        list-style-type: none;

        li {
            .text;
        }
    }

    a {
        color: @text-color;
        text-decoration: none;

        &:hover {
            color: @quaternary-color;
        }
    }
}
</style>
