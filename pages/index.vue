<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="bg-truegray-900 h100vh flex flex-col flex-items-center">
    <div class="flex flex-col flex-items-start px8">
      <div class="pt16 min-w-10 px8 max-w-6xl text-4xl text-white font-900 sm:min-w-xl lg:min-w-2xl xl:min-w-5xl">
        欢迎，
        <br>
        这是 Gianthard 的博客
      </div>
      <div class="pt16">
        <PostList></PostList>
      </div>
    </div>
  </div>
</template>
