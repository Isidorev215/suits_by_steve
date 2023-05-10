<template>
  <div>
    <Navbar />

    <main class="grid grid-cols-3 gap-3 bg-white dark:bg-gray-900 h-[calc(100vh-8rem)]">
      <div class="left col-span-3 lg:col-span-2 flex justify-center items-center px-4 pt-5 pb-1">
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
      </div>
      <div class="right col-span-3 lg:col-span-1 px-4 lg:px-0 bg-transparent border-l-2 flex flex-col justify-around items-center">
        
        <!-- <TabsWrapper>
          <Tab title="Suit 1">
            <SuitOne :propColor="fullSuitPayload" />
          </Tab>
          <Tab title="Suit 2">
            <img src="https://via.placeholder.com/640x800.png?text=No+Content" alt="">
          </Tab>
        </TabsWrapper> -->
        
        <SuitOne class="w-11/12" :propColor="fullSuitPayload" />
        <ImageControls @updateSuitSection="updateSuitSection" />
      </div>
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