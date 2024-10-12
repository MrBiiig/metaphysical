<template>
  <div class="eight-trigram-container">
    <a-radio-group v-model="preOrPost" type="button">
      <a-radio value="pre">先天八卦</a-radio>
      <a-radio value="post">后天八卦</a-radio>
    </a-radio-group>
    <template v-if="preOrPost === 'pre'">
      <div
        v-for="(trigramKey, index) in eightTrigrams_preHeaven"
        :key="trigramKey"
        :style="eightTrigramLayout[index]"
        :class="`${trigramKey}-color ${trigramKey}-inverse-bgcolor`"
        class="trigram-block"
      >
        {{ eightTrigramsDetail[trigramKey].name
        }}{{ eightTrigramsDetail[trigramKey].logo }}
      </div>
      <a-popover>
        <a-button style="position: absolute; left: 50%; top: 50%"
          >说明</a-button
        >
        <template #content>
          <p>
            其余数卦依阳自左转，阴自右转的原则，在南方，由阳仪生出来的四卦乾、兑、离、震在左边，依次逆时针由乾到兑、兑到离、离到震排列出来；在北方，由阴仪生出来的四卦的巽、坎、艮、坤在右边，依次顺时针由巽到坎、坎到艮、艮到坤排列出来，由此产生了先天八卦的方位。即“天地定位，山泽通气，雷风相薄，水火不相射。八卦相错，数往者顺，知来者逆，是故易逆数也”
          </p>
        </template>
      </a-popover>
    </template>
    <template v-else>
      <div
        v-for="(trigramKey, index) in eightTrigrams_postHeaven"
        :key="trigramKey"
        :style="eightTrigramLayout[index]"
        :class="`${trigramKey}-color ${trigramKey}-inverse-bgcolor`"
        class="trigram-block"
      >
        {{ eightTrigramsDetail[trigramKey].name
        }}{{ eightTrigramsDetail[trigramKey].logo }}
      </div>
      <a-popover>
        <a-button style="position: absolute; left: 50%; top: 50%"
          >说明</a-button
        >
        <template #content>
          <p>
            《周易·说卦传》：“帝出乎震”。我们可以简单的理解为太阳从东边升起，太阳升起万物复苏，震动土地，故震位于东方。震五行属木，旺于春季，所以东方在季节上对应春季。夏季最为炎热，所以在位置上对应南方，南方属火，八卦中离为火。秋季肃杀之气最重，万物凋零，在位置上对应西方，兑为金，所以兑金在西方。冬季属水，最为阴冷，位在北方，八卦之中坎为水，故坎卦在北。其余四卦，巽在东南，承木气而生火，坤在西南，承火气而生金，乾在西北，承金气而生水，艮在东北，为冬春之交。
          </p>
        </template>
      </a-popover>
    </template>
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
const eightTrigrams_preHeaven = ref(
  /* 避免sort方法改变原数组 */
  Array.from(eightTrigramKeys).sort(
    (key1, key2) =>
      eightTrigramsDetail[key1].preHeavenDirection -
      eightTrigramsDetail[key2].preHeavenDirection
  )
);
// 后天八卦顺序
const eightTrigrams_postHeaven = ref(
  /* 避免sort方法改变原数组 */
  Array.from(eightTrigramKeys).sort(
    (key1, key2) =>
      eightTrigramsDetail[key1].postHeavenDirection -
      eightTrigramsDetail[key2].postHeavenDirection
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
