<template>
  <div class="image_controls" ref="imageControls">
    <div class="w-full flex justify-start items-center space-x-2 relative">
      <button @click="selectSuitSection(suitSection.JACKET)" class="jacket cursor-pointer w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center shadow-xl">
        <Icon name="icon-park-solid:wingsuit-flying" color="#ffffff" width="120" :horizontalFlip="true" />
      </button>
      <button @click="selectSuitSection(suitSection.SHIRT)" class="jacket cursor-pointer w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center shadow-xl">
        <Icon name="ph:t-shirt-fill" color="white" width="120" :horizontalFlip="true" />
      </button>
      <button @click="selectSuitSection(suitSection.TROUSERS)" class="jacket cursor-pointer w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center shadow-xl">
        <Icon name="icon-park-outline:clothes-pants" color="white" width="120" :horizontalFlip="true" />
      </button>

      <!-- color select -->
        <div v-if="openColorSelector" class="color-select-wrapper">
          <div v-if="(selection.suitSection !== suitSection.SHIRT)" class="suit flex flex-col items-center space-y-3 p-4 bg-white dark:bg-gray-800 shadow-md rounded-md absolute z-50 -top-72 left-1/2 -translate-x-1/2">
            <button @click="selectColor(suitColors.BLACK)" class="bg-stv-black py-1 px-2 no-underline rounded-lg text-white">Black</button>
            <button @click="selectColor(suitColors.BROWN)" class="bg-stv-brown py-1 px-2 no-underline rounded-lg text-white">Brown</button>
            <button @click="selectColor(suitColors.GRAY)" class="bg-stv-gray py-1 px-2 no-underline rounded-lg text-white">Gray</button>
            <button @click="selectColor(suitColors.NAVY)" class="bg-stv-navy py-1 px-2 no-underline rounded-lg text-white">Navy</button>
            <button @click="selectColor(suitColors.TAN)" class="bg-stv-tan py-1 px-2 no-underline rounded-lg text-white">Tan</button>
          </div>
          <div v-else class="shirt flex flex-col items-center space-y-3 p-4 bg-white dark:bg-gray-800 shadow-md rounded-md absolute z-50 -top-48 left-1/2 -translate-x-1/2">
            <button @click="selectColor(shirtColors.WHITE)" class="bg-stv-white py-1 px-2 no-underline rounded-lg text-gray-800 border border-gray-80">White</button>
            <button @click="selectColor(shirtColors.CREAM)" class="bg-stv-cream py-1 px-2 no-underline rounded-lg text-gray-800 border border-gray-80">Cream</button>
            <button @click="selectColor(shirtColors.POWDBLUE)" class="bg-stv-powdBlue py-1 px-2 no-underline rounded-lg text-white">Blue</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { suitColors, shirtColors, suitSection } from '~/types/enums'
import { selectionInterface } from '~/types/interfaces'

  const emit = defineEmits(['updateSuitSection'])
  const imageControls = ref<HTMLDivElement>();

  const openColorSelector = ref<boolean>(false);
  const selection = ref<selectionInterface>({
    color: suitColors.BLACK,
    suitSection: suitSection.JACKET
  })
  onClickOutside(imageControls, () => openColorSelector.value = false)

  const selectSuitSection = (selectedSection: suitSection) => {
    openColorSelector.value = true;
    selection.value.suitSection = selectedSection;
  }

  const selectColor = (selectedColor: shirtColors | suitColors) => {
    selection.value.color = selectedColor;
    emit('updateSuitSection', selection.value);
    openColorSelector.value = false;
  } 
</script>

<style scoped>
</style>