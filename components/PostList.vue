<template>
  <div class="px8">
    <ContentList v-slot="{ list }">
      <a class="group hover:cursor-pointer" v-for="i in list" @click="navigateTo(i._path)">
        <div class="pt min-w-sm  text-3xl text-white op-50 group-hover:op-100 font-600 transition-all-200">
          {{ i.title }}
        </div>
        <div class="pt3 min-w-sm text-xl text-white op-30 group-hover:op-90 font-500 transition-all-200">
          {{ i.description }}
        </div>
      </a>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
var title = ref("Title")
var summary = ref("lorem ipsum")
</script>

<style scoped></style>