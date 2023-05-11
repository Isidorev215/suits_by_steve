<template>
  <div>
    <Navbar />

    <main class="flex justify-center lg:grid lg:grid-cols-3 h-[calc(100vh-9rem)]">
      <section class="hidden lg:col-span-2 lg:flex justify-center items-center px-4 pt-5 pb-1">
        <div class="">
          <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Every man has to own a Black Suit.</h1>
          <p class="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            <span>There are five suits you need to get in all. You should not mess it up.... It's all on you.... Make your 70+ suit combinations.</span>
          </p>
          <p class="hidden lg:block mt-3 mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <button @click="changeFullSuit(suitColors.BLACK)" class="bg-stv-black pill">Black </button>
            <button @click="changeFullSuit(suitColors.BROWN)" class="bg-stv-brown pill">Brown </button>
            <button @click="changeFullSuit(suitColors.GRAY)" class="bg-stv-gray pill">Gray </button>
            <button @click="changeFullSuit(suitColors.NAVY)" class="bg-stv-navy pill">Navy </button>
            <button @click="changeFullSuit(suitColors.TAN)" class="bg-stv-tan pill">Tan </button>
          </p>
        
          <button @click="generateRandom" title="So sayeth Steve Harvey" class="inline-flex justify-center items-center py-3 px-5 mt-2 lg:mt-0 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Randomize
          </button>
        </div>
      </section>
      <section class="w-96 flex flex-col lg:col-span-1 justify-center items-center bg-white dark:bg-gray-900">
        <div class="lg:hidden top w-full h-full flex justify-center items-center">
          <h2 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-3xl xl:text-4xl dark:text-white">So Sayeth Steve!</h2>
        </div>
        <SuitOne class="w-full" :propColor="fullSuitPayload" @emitGenerateRandom="generateRandom" @updateSuitSelectionForwarded="updateSuitSection"/>
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