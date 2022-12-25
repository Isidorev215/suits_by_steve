<template>
  <div>
    <Navbar />

    <!-- <main class="bg-white dark:bg-gray-900">
      <div class="grid px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div class="place-self-center mr-auto lg:col-span-7">
          <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Every man has to own a Black Suit</h1>
          <p class="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            <span>There are five suits you need to get in all. You should not mess it up.... Its all on you.... Make your 70+ suit combinations.</span>
          </p>
          <p class="hidden lg:block mt-3 mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <span class="bg-stv-black pill">Black </span>
            <span class="bg-stv-brown pill">Brown </span>
            <span class="bg-stv-gray pill">Gray </span>
            <span class="bg-stv-navy pill">Navy </span>
            <span class="bg-stv-tan pill">Tan </span>
          </p>
          
          <button title="Randomize" class="inline-flex justify-center items-center py-3 px-5 mt-2 lg:mt-0 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Try it Out
          </button>
        </div>
        <div class="mt-4 lg:mt-0 col-span-12 lg:col-span-5 lg:flex border-l-2">
          <img src="~/assets/white_suit_1.jpg" alt="">
        </div>
      </div>
    </main> -->
    <main class="grid grid-cols-3 gap-3 bg-white dark:bg-gray-900 h-[calc(100vh-8rem)]">
      <div class="left col-span-3 lg:col-span-2 flex justify-center items-center px-4 pt-5 pb-1">
        <div class="">
          <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Every man has to own a Black Suit</h1>
          <p class="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
            <span>There are five suits you need to get in all. You should not mess it up.... Its all on you.... Make your 70+ suit combinations.</span>
          </p>
          <p class="hidden lg:block mt-3 mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <span class="bg-stv-black pill">Black </span>
            <span class="bg-stv-brown pill">Brown </span>
            <span class="bg-stv-gray pill">Gray </span>
            <span class="bg-stv-navy pill">Navy </span>
            <span class="bg-stv-tan pill">Tan </span>
          </p>
        
          <button title="Randomize" class="inline-flex justify-center items-center py-3 px-5 mt-2 lg:mt-0 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Try it Out
          </button>
        </div>
      </div>
      <div class="right col-span-1 bg-transparent border-l-2 flex justify-center items-center">
        <img src="~/assets/white_suit_1.jpg" alt="">
      </div>
    </main>
    
    <Footer />

    
  </div>

</template>


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