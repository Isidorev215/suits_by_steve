<template>
  <div class="tab-component" v-show="title == selectedTitle">
    <slot />
  </div>
</template>

<script setup>
  const props = defineProps(['title']);
  const selectedTitle = inject('selectedTitle');
</script>

<style scoped>

</style>