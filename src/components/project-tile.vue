<template>
  <a class="project-tile">
    {{ name }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectTile",
  props: ["name"]
});
</script>

<style lang="less" scoped>
@import "../global.less";

.project-tile {
  background-color: @overlay;
  height: 1000px;
  border-radius: 20px;

  width: 90%;
  @media (min-width: 1600px) {
      max-width: @max-content-width;
  }
}
</style>
