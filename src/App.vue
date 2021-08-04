<template>
    <header>
        <nav>
            <ul class="nav-list">
                <li class="nav-list-item">
                    <router-link to="/" class="router-link proj-dropdown-trigger">Projects</router-link>
                    <div class="proj-dropdown">
                        <ul>
                            <li :key="key" v-for="(val, key) in projectList">
                                <router-link :to="'/projects/' + key" class="router-link">{{ val.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-list-item">
                    <router-link to="/about" class="router-link">About Me</router-link>
                </li>
                <li class="nav-list-item">
                    <router-link to="/contact" class="router-link">Contact</router-link>
                </li>
                <li class="mrg-l-auto nav-list-item">
                    <a href="https://www.linkedin.com/in/noah-j-gray" target="_blank" rel="noreferrer noopener">
                        <img alt="LinkedIn" src="/linkedin.png" />
                    </a>
                </li>
                <li class="nav-list-item">
                    <a href="https://www.github.com/NoahJohnG" target="_blank" rel="noreferrer noopener">
                        <img alt="Github.com" src="/github.png" />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    <router-view />
</template>

<script lang="ts">
import { ViewName, ProjectDescription } from "@/types"
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    computed: {
        projectList: function(): Record<ViewName, ProjectDescription> {
            return this.$store.state.projectList
        }
    },
    data () {
        return {
            active: false,
        }
    },
    methods: {
        toggle_proj_dropdown: function () {
            this.active = !this.active;
        },
    },
    created() {
        for (let key in this.projectList) {
            let route = "/projects/" + key;
            console.log("Registered (" + route + ") in routing table");
            this.$router.addRoute({
                path: route,
                name: key,
                component: () => import("@/views" + route)
            });
        }

        // Update router-view in case current location == one of the added routes
        setTimeout(() => {
            this.$router.replace(this.$router.currentRoute.value.fullPath);
        }, 0)
    },
})
</script>


<style lang="less">
@import "@/global.less";

* {
    margin: 0;
    padding: 0;
}

::selection {
    background: @tertiary-color;
}

html {
    scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
}

body {
    background-image:
        linear-gradient(0deg, fade(black, 60%), fade(black, 10%)),
        url("assets/background.jpg"),
        linear-gradient(0deg, @primary-color, @primary-color);
    background-size: cover;
    background-attachment: fixed;
    font-size: 22px;
}

@media ( max-width: 1739px ) {
    body {
        font-size: 20px;
    }
}

@media ( max-width: 1399px ) {
    body {
        font-size: 18px;
    }
}

@media ( max-width: 1199px ) {
    body {
        font-size: 16px;
    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @text-color;
    height: 100vh;
}

.router-link {
    font-weight: bold;
    text-decoration: none;
    color: @text-color;
}

header {
    position: fixed;
    background-color: @overlay;
    width: 100%;
    z-index: 1000;

    nav {
        &:extend(.content-width);

        position: relative;

        .nav-list {
            list-style-type: none;
            overflow: hidden;
            display: flex;
        }

        .nav-list-item {
            float: left;
            display: list-item;
            text-align: -webkit-match-parent;
            margin-left: 10px;

            .router-link {
                display: block;
                text-align: center;
                padding: 14px 16px;
            }

            a.router-link-exact-active {
                color: @link-color !important;
            }

            img {
                padding: 8px 16px;
                width: 1.6em;
                height: 1.6em;

                filter: invert(100%);
                -webkit-filter: invert(100%);
            }
        }

        .proj-dropdown {
            display: none;
            position: absolute;

            .router-link {
                text-align: left;
            }

            ul {
                list-style-type: none;
                background-color: @overlay;
                border-radius: 5px 0px;
            }

            li {
                border-radius: inherit;
                padding: 14px 16px;
            }

            li:hover {
                background-color: fade(@primary-color, 90%);
            }
        }

        .proj-dropdown-trigger:hover + .proj-dropdown {
            display: block;
        }

        .proj-dropdown:hover {
            display: block;
        }
    }
}

.mrg-l-auto {
    margin-left: auto !important;
}
</style>
