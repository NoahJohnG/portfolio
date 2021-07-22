<template>
    <header>
        <nav>
            <ul class="nav-list">
                <li class="nav-list-item">
                    <router-link to="/" class="router-link proj-dropdown-trigger">Projects</router-link>
                    <div class="proj-dropdown">
                        <ul>
                            <li>Physical Chess AI</li>
                            <li>Scheduling Service</li>
                            <li>Synchronome</li>
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
    <div id="content">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    data () {
        return {
            active: false,
        }
    },
    methods: {
        toggle_proj_dropdown: function () {
            this.active = !this.active;
        },
    }
})
</script>


<style lang="less">
@import "global.less";

* {
    margin: 0;
    padding: 0;
}

::selection {
    background: @ternary-color;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @text-color;

    background-image:
        linear-gradient(0deg, fade(black, 60%), fade(black, 10%)),
        url("assets/background.jpg"),
        linear-gradient(0deg, @primary-color, @primary-color);
    background-size: cover;
    background-attachment: fixed;
}

header {
    position: fixed;
    background-color: @overlay;
    width: 100%;
    z-index: 1000;

    nav {
        margin: 0 auto;
        position: relative;

        .nav-list {
            list-style-type: none;
            margin: 0 auto;
            overflow: hidden;
            display: flex;
        }

        .nav-list-item {
            float: left;
            display: list-item;
            text-align: -webkit-match-parent;
            margin-left: 10px;

            a {
                display: block;
                text-align: center;
            }

            .router-link {
                padding: 14px 16px;
                font-weight: bold;
                text-decoration: none;
                color: @text-color;
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

#content {
    padding-top: 5vh;
    height: 95vh;
}

.mrg-l-auto {
    margin-left: auto !important;
}
</style>