<template>
  <div class="eight-trigram-container">
    <a-radio-group v-model="preOrPost" type="button">
      <a-radio value="pre">先天八卦</a-radio>
      <a-radio value="post">后天八卦</a-radio>
    </a-radio-group>
    <div
      v-for="(trigramKey, index) in eightTrigrams_earlierHeaven"
      :key="trigramKey"
      :style="eightTrigramLayout[index]"
      :class="`${trigramKey}-color ${trigramKey}-inverse-bgcolor`"
      class="trigram-block"
    >
      {{ eightTrigramsDetail[trigramKey].name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import {
  eightTrigramKeys,
  eightTrigramsDetail,
} from "@/commons/eight-trigrams";

const props = defineProps({
  width: {
    type: Number,
    default: 500,
  },
  height: {
    type: Number,
    default: 500,
  },
  blockLineHeight: {
    type: Number,
    default: 31,
  },
  blockFontSize: {
    type: Number,
    default: 24,
  },
});

const widthStyle = computed(() => `${props.width}px`);
const heightStyle = computed(() => `${props.height}px`);
const blockLineHeightStyle = computed(() => `${props.blockLineHeight}px`);
const blockFontSizeStyle = computed(() => `${props.blockFontSize}px`);
// 按顺序，从北方（正上方）开始逆时针走4个到了西南方，再从东北方开始顺时针走4个到了南方（正下方）
const eightTrigramLayout = [
  {
    top: 0,
    left: `${props.width / 2}px`,
    transform: "translate(-50%, 0)",
  },
  {
    top: `${props.height / 2 - props.height / 2 / 1.414}px`,
    left: `${props.width / 2 - props.width / 2 / 1.414}px`,
  },
  {
    top: `${props.height / 2}px`,
    left: 0,
    transform: "translate(0, -50%)",
  },
  {
    top: `${props.height / 2 + props.height / 2 / 1.414}px`,
    left: `${props.width / 2 - props.width / 2 / 1.414}px`,
  },
  {
    top: `${props.height / 2 - props.height / 2 / 1.414}px`,
    left: `${props.width / 2 + props.width / 2 / 1.414}px`,
  },
  {
    top: `${props.height / 2}px`,
    left: `${props.width}px`,
    transform: "translate(-100%, -50%)",
  },
  {
    top: `${props.height / 2 + props.height / 2 / 1.414}px`,
    left: `${props.width / 2 + props.width / 2 / 1.414}px`,
  },
  {
    top: `${props.height}px`,
    left: `${props.width / 2}px`,
    transform: "translate(-50%, -100%)",
  },
];
// 先天八卦还是后天八卦
const preOrPost = ref("pre");

// 先天八卦顺序
const eightTrigrams_earlierHeaven = ref(
  /* 避免sort方法改变原数组 */
  Array.from(eightTrigramKeys).sort(
    (key1, key2) =>
      eightTrigramsDetail[key1].preHeavenDirection -
      eightTrigramsDetail[key2].preHeavenDirection
  )
);
</script>
<style lang="less" scoped>
.eight-trigram-container {
  position: relative;
  width: v-bind(widthStyle);
  height: v-bind(heightStyle);
  .trigram-block {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: v-bind(blockFontSizeStyle);
    line-height: v-bind(blockLineHeightStyle);
  }
}
</style>
