<template>
  <div class="tabs relative">
    <ul class="tab_header list-none p-0 flex absolute z-30">
      <li 
        class="text-center text-xs px-2 py-1 mt-1 ml-1 bg-gray-300 dark:bg-gray-800 rounded-sm cursor-pointer transition-all" 
        :class="[title === selectedTitle ? 'bg-blue-300 text-white font-medium' : '' ]"
        v-for="title in tabTitles" 
        :key="title" 
        @click="selectedTitle = title"
      >
        {{title}}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
  const slots = useSlots();
  const tabTitles = ref(slots.default().map(tab => tab.props.title));
  const selectedTitle = ref(tabTitles.value[0]);

  provide('selectedTitle', selectedTitle);
</script>

<style scoped>

</style>