<template>
  <div>
    <Navbar />

    <main class="grid grid-cols-3">
      <section class="col-span-3 relative flex items-center bg-white dark:bg-gray-900 h-[calc(100vh-9rem)]">
        <SuitOne class="w-full" :propColor="fullSuitPayload" @emitGenerateRandom="generateRandom" />
        <ImageControls class="absolute left-[50%] translate-x-[-50%] bottom-10 z-30" @updateSuitSection="updateSuitSection" />
      </section>
    </main>
    
    <Footer />

    
  </div>

</template>

<script setup lang="ts">
import { suitColors, shirtColors, suitSection } from '~/types/enums'
import { fullSuitInterface, selectionInterface } from '~/types/interfaces'

  const fullSuitPayload = ref<fullSuitInterface>({
    jacket: suitColors.BLACK,
    shirt: shirtColors.WHITE,
    trousers: suitColors.BLACK,
  })
  const changeFullSuit = (colorPayload: suitColors | shirtColors) => {
    fullSuitPayload.value.jacket = colorPayload;
    fullSuitPayload.value.trousers = colorPayload;
  }

  const updateSuitSection = (payload: selectionInterface) => {
    if(payload.suitSection === suitSection.JACKET){
      fullSuitPayload.value.jacket = payload.color;
    }else if(payload.suitSection === suitSection.SHIRT){
      fullSuitPayload.value.shirt = payload.color;
    }else if(payload.suitSection === suitSection.TROUSERS){
      fullSuitPayload.value.trousers = payload.color;
    }
  }
  
  // enums to arrays
  const suitColorsArray = Object.values(suitColors);
  const shirtColorsArray = Object.values(shirtColors);

  const generateRandom = () => {
    fullSuitPayload.value.jacket = suitColorsArray[Math.floor(Math.random()*suitColorsArray.length)];
    fullSuitPayload.value.shirt = shirtColorsArray[Math.floor(Math.random()*shirtColorsArray.length)];
    fullSuitPayload.value.trousers = suitColorsArray[Math.floor(Math.random()*suitColorsArray.length)];
  }
</script>

<style>
html.dark {
  color-scheme: dark;
}

body {
  @apply bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-50;
}

.pill{
  @apply py-2 px-4 shadow-md no-underline rounded-lg text-white hover:text-white focus:outline-none active:shadow-none mr-2;
}
</style>