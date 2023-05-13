<template>
  <header>
    <nav class="bg-gray-100 h-16 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <a href="/" class="flex items-center">
          <img src="~/assets/favicon_io_2/android-chrome-192x192.png" class="h-6 mr-3 sm:h-9" alt="Steve Harveys head">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Suit By Harvey</span>
        </a>
        <div class="flex items-center lg:order-2">
          <button @click="toggleDark()" href="#"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">

            <Icon v-show="isDark" name="uil:brightness" size="18px" />
            <Icon v-show="!isDark" name="uil:moon-eclipse" size="18px" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>

</style>