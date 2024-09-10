<template>
  <div class="home">
    <EightTrigram :width="500" :height="500" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import EightTrigram from "@/components/EightTrigram.vue";

const msg = "Welcome to Your Vue.js + TypeScript App";
</script>
<style lang="less" scoped></style>
