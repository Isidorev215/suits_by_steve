<template>

  <footer class="fixed bottom-0 w-full h-20 lg:h-16 p-4 bg-gray-100 flex items-center justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#"
        class="hover:underline">By Isidore</a>. Are Rights Reserved?
    </span>
    <ul class="flex flex-wrap justify-end items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <button type="button" @click="(openDisclaimer = true)" class="mr-4 hover:underline md:mr-6 ">
          <span class="w-6 h-6 flex justify-end items-center lg:hidden">
            <Icon name="icon-park-outline:caution" width="90" :horizontalFlip="true" />
          </span>
          <span class="hidden lg:inline">Disclaimer</span>
        </button>
      </li>
    </ul>
  </footer>

  <!-- Disclaimer Modal -->
  <transition name="fade" appear>
    <div v-show="openDisclaimer" class="modal-overlay fixed bg-[rgba(0,0,0,0.6)] top-0 left-0 right-0 bottom-0 z-40 w-full content-[' ']"></div>
  </transition>

  <transition name="pop" appear>
    <div v-show="openDisclaimer" id="bottom-right-modal" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-end items-end">
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              Disclaimer
            </h3>
            <button @click="openDisclaimer = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="bottom-right-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                This website is not affiliated with Steve Harvey or his fashion line. The suit ideas featured on this website are inspired by Steve Harvey's personal style and are intended for informational and entertainment purposes only. We do not claim to be offering official or licensed products, and we are not responsible for any errors or omissions in the information provided.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The use of any trademarks or copyrighted materials on this website is not intended to imply endorsement or sponsorship. Please be aware that fashion trends and personal style preferences may vary, and we recommend that you consult with a professional stylist or tailor before making any purchases or fashion decisions.
              </p>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button @click="openDisclaimer = false" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script setup lang="ts">
  const openDisclaimer = ref<boolean>(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(100%) translateX(100%);
}
</style>