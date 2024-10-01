<script setup lang="ts">
import navbar from "../components/navbar.vue";
import ctfv_fullLogo from "@/components/icons/ctfv_fullLogo.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
  // https://vue3datepicker.com/
import '@vuepic/vue-datepicker/dist/main.css';
// import trenR from "../assets/images/531ctfv.webp";
import { ref } from "vue";

var ctfv_status = ref({ 
  statusCode: 1, 
  custom_stateMessage: "Ascensor averiado en vía 2 en Utiel. Los trenes circulan en vía única. Pueden haber retrasos. Disculpen las molestias."
});

var date = ref(null);
</script>
<template>
  <navbar/>
  <img src="../assets/images/trenR.webp" width="100%">
  <main class="flex flex-col gap-12 px-[5%] my-4">
    
    <div class="flex flex-col justify-center items-center">

      <div v-if="ctfv_status.statusCode == 0" class="w-2/3 h-auto bg-desat-primary-blue border border-primary-blue rounded-lg flex flex-col justify-center items-center p-4">
        <p class="text-center text-primary-blue font-normal text-xl">
          Todas las líneas funcionan con normalidad.
        </p>
      </div>
      <div v-else-if="ctfv_status.statusCode == 1" class="w-2/3 h-auto bg-desat-main-yellow border border-warning-ocre rounded-lg flex flex-col justify-center items-center p-4">
        <p class="text-center text-warning-ocre font-normal text-xl">
          {{ ctfv_status.custom_stateMessage }}
        </p>
      </div>
      <div v-else-if="ctfv_status.statusCode == 2" class="w-2/3 h-auto bg-desat-red border border-warning-red rounded-lg flex flex-col justify-center items-center p-4">
        <p class="text-center text-warning-red font-normal text-xl">
          {{ ctfv_status.custom_stateMessage }}
        </p>
      </div>
      <div v-else class="w-2/3 min-w-fit h-auto bg-neutral-300 border border-black rounded-lg flex flex-col justify-center items-center p-4">
        <p class="text-center font-normal text-xl">
          No hay información sobre el estado del servicio. Disculpe las molestias.
        </p>
      </div>

    </div>

    <div class="flex flex-col items-center justify-center">
      <div class=" min-w-60 h-min flex flex-col gap-4 lg:grid lg:grid-cols-[auto_3rem_auto] lg:grid-rows-[auto_auto] lg:gap-y-8 p-4 relative bg-[#d9d9d9] rounded-lg shadow-md">
      
        <div class="h-fit block w-auto">
          <label class="text-2xl font-normal" for="origenEstacion">Origen:</label>
          <input type="text" id="origEstacion" placeholder="Camporrobles" class=" w-full min-h-10 p-3 mt-1 rounded-md border-gray-200 border shadow-sm md:text-base"/>
        </div>
      
        <div class="flex items-center justify-start lg:items-end lg:justify-center">
          <button class="relative w-10 h-10 p-0.5 lg:transition-all bg-white rounded-full rotate-90 lg:rotate-0 bg-[url('../components/icons/flechas.svg')]"></button>
        </div>
      
        <div class="h-fit block w-auto">
          <div class="flex-col items-end gap-y-10">
            <label class="text-2xl font-normal" for="destEstacion">Destino:</label>
            <input type="text" id="destEstacion" placeholder="Camporrobles" class="w-full min-h-10 p-3 mt-1 rounded-md border-gray-200 border shadow-sm md:text-base"/>
          </div>
        </div>
      
        <div class="h-min w-full">
          <!--TODO: estilizar datepicker. link a docum en los imports -->
          <vue-date-picker time-picker-inline v-model="date"/>
        </div>

        <!--div separador-->
        <div></div>
        
        <div class="h-fit w-full flex justify-start items-center">
          <button class=" w-full lg:w-1/2 min-w-fit px-2 min-h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Buscar</button>
        </div>
      
      </div>
    </div>

    <div class="flex justify-center items-center">

      <div class="w-full max-w-5xl h-auto border border-black rounded-lg">
        <div class="rounded-[inherit]">
          <div class="w-full h-auto bg-[#d9d9d9] inline-flex justify-between items-center rounded-t-[inherit] px-2 py-1">
            <p class="text-center font-normal text-xl">Plano</p>
            <button class="min-w-min px-2 h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Descargar</button>
          </div>
          <!-- TODO: una version vertical del plano para movil-->
          <img src="../assets/images/plano_ctfv.png" class="min-w-36 rounded-b-lg" alt="" width="100%" srcset="">
        </div>
      </div>
    </div>

    <div class="inline-flex flex-wrap justify-center gap-20">
      <div class="bg-[#d9d9d9] p-4 rounded-lg">
        <div class="bg-white mx-auto min-h-40 min-w-80 rounded-t-sm"></div>
        <div class="w-full inline-flex items-center justify-end my-8 border border-black">
          <button class="min-w-min px-2 h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Ir a Tarifas</button>
        </div>
      </div>
      
      <div class="bg-[#d9d9d9] p-4 rounded-lg">
        <div class="bg-white mx-auto min-h-40 min-w-80 rounded-t-sm"></div>
        <div class="w-full inline-flex items-center justify-end my-8 border border-black">
          <button class="min-w-min px-2 h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Ir a Tarifas</button>
        </div>
      </div>
    </div>

  </main>

  <div class="w-full h-full bg-main-yellow inline-flex justify-center items-center pt-8 pb-4">
    <ctfv_fullLogo class="w-1/2 max-w-96 h-min "/>
  </div>
</template>
