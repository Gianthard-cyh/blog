<template>
  <main class="prose bg-trueGray-900 min-h-100vh flex flex-col flex-items-center">
    <div class=" text-white pt20 pb50 min-w-sm px8 max-w-6xl text-white font-900 w-sm sm:w-xl lg:min-w-2xl xl:min-w-5xl">
      <a class="hover:cursor-pointer text-xl text-white op-30 hover:op-90 font-00 transition-all-200"
        @click="navigateTo('/')">
        主页
      </a>
      <ContentDoc class="mt10 text-xl font-500 lh-relaxed" />
    </div>
    <!-- {{ $route.params }} -->
  </main>
</template>

<script setup lang="ts">
import { routerKey } from 'vue-router';

var route = useRoute()
onMounted(() => {
  if (route.params.slug.length == 0) {
    navigateTo("/")
  }
})

</script>

<style>
img {
  width: 100%;
  object-fit: scale-down;
}
</style>