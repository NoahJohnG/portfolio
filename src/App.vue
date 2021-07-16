<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link to="/" class="router-link">Projects</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="router-link">Contact</router-link>
                </li>
                <li class="mrg-l-auto">
                    <a href="https://www.linkedin.com/in/noah-j-gray" target="_blank" rel="noreferrer noopener">
                        <img alt="LinkedIn" src="/linkedin.png" />
                    </a>
                </li>
                <li>
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

<style lang="less">
@import "global.less";

* {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @text-color;

    background-image:
        linear-gradient(0deg, fade(black, 60%), fade(black, 10%)),
        url("assets/background.jpg");
    background-size: cover;
}

header {
    position: fixed;
    padding: 0 @std_padding;
    background-color: @overlay;
    width: 100%;

    nav {
        max-width: 1600px;
        width: 100%;
        margin: 0 auto;
        position: relative;

        ul {
            list-style-type: none;
            margin: 0 auto;
            padding: 0;
            overflow: hidden;
            max-width: 90%;
            display: flex;

            li {
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

                img {
                    padding: 8px 16px;
                    width: 1.6em;
                    height: 1.6em;

                    filter: invert(100%);
                    -webkit-filter: invert(100%);
                }

                a.router-link-exact-active {
                    color: @link-color;
                }
            }
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
