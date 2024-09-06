<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- ...rest of your template... -->
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  msg: String,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
