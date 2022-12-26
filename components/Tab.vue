<template>
  <div class="tab-component w-full lg:w-80 xl:w-96" v-show="title == selectedTitle">
    <slot />
  </div>
</template>

<script setup>
  const props = defineProps(['title']);
  const selectedTitle = inject('selectedTitle');
</script>

<style scoped>

</style>