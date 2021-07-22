<template>
  <div id="home">
    <h1>Hi, I'm Noah</h1>
    <h3>This is my portfolio website</h3>
    <div class="project-tiles">
      <ProjectTile :key="n" v-for="n in 5" :name="n" /> 
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectTile from "../components/project-tile.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProjectTile
  },
});
</script>

<style lang="less" scoped>
@import "../global.less";

#home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .project-tiles {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    background-color: @primary-color;

    position: absolute;
    top: 100vh;
    width: 100%;
    gap: 6em;
    padding: 7em 0;
  }
}
</style>