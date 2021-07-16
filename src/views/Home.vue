<template>
  <div id="home">
    <h1>Hi, I'm Noah</h1>
    <h3>This is my portfolio website</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
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
}

.footer {
  font-size: 0.8em;
  position: absolute;
  bottom: @std_padding;
  left: @std_padding;
}
</style>