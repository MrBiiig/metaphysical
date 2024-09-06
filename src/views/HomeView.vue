<template>
  <div class="home">
    <h1
      v-for="trigramKey in eightTrigramKeys"
      :key="trigramKey"
      :class="`${trigramKey}-color ${trigramKey}-inverse-bgcolor`"
    >
      {{ eightTrigramsDetail[trigramKey].name }}
    </h1>
    <HelloWorld :msg="msg" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import {
  eightTrigramKeys,
  eightTrigramsDetail,
} from "@/commons/eight-trigrams";

// 先天八卦顺序
const eightTrigrams_earlierHeaven = eightTrigramKeys.sort(
  (key1, key2) =>
    eightTrigramsDetail[key1].earlierHeavenDirection -
    eightTrigramsDetail[key2].earlierHeavenDirection
);

const msg = "Welcome to Your Vue.js + TypeScript App";
</script>
