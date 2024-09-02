<script setup lang="ts">
import navbar from "../components/navbar.vue";
import ctfv_fullLogo from "@/components/icons/ctfv_fullLogo.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
  // https://vue3datepicker.com/
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from "vue";

var ctfv_status = ref({ 
  statusCode: null, 
  custom_stateMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nobis et excepturi fugit unde nam quam exercitationem dolores beatae ullam? Saepe, adipisci consequatur sapiente libero quas facilis nostrum veritatis amet laudantium culpa corrupti itaque odio obcaecati! Assumenda saepe sint amet doloremque! Ullam distinctio nesciunt alias magni repellat et, aut cum."
});

var date = ref(null);
</script>
<template>
  <main class="flex flex-col gap-12">
    <div>
      <navbar/>
      <img src="../assets/images/trenR.png" width="100%">
    </div>
    
    <div v-if="ctfv_status.statusCode == 0" class="w-2/3 h-auto bg-desat-primary-blue border border-primary-blue mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center text-primary-blue font-normal text-xl">
        Todas las líneas funcionan con normalidad.
      </p>
    </div>
    <div v-else-if="ctfv_status.statusCode == 1" class="w-2/3 h-auto bg-desat-main-yellow border border-warning-ocre mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center text-warning-ocre font-normal text-xl">
        {{ ctfv_status.custom_stateMessage }}
      </p>
    </div>
    <div v-else-if="ctfv_status.statusCode == 2" class="w-2/3 h-auto bg-desat-red border border-warning-red mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center text-warning-red font-normal text-xl">
        {{ ctfv_status.custom_stateMessage }}
      </p>
    </div>
    <div v-else class="w-2/3 h-auto bg-neutral-300 border border-black mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center font-normal text-xl">
        No hay información sobre el estado del servicio. Disculpe las molestias.
      </p>
    </div>

    <div class="flex flex-col items-start justify-center">
      <div class="w-1/3 min-w-60 h-min flex flex-col gap-4 lg:grid lg:grid-cols-[auto_3rem_auto] lg:grid-rows-[auto_auto] lg:gap-y-8 p-4 relative bg-[#d9d9d9] rounded-lg mx-auto shadow-md">
      
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

        <div class="h-1"></div>
        
        <div class="h-fit w-full flex justify-start items-center">
          <button class="w-1/2 min-w-fit px-2 h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Buscar</button>
        </div>
      
      </div>
    </div>

    <div class="w-2/3 h-auto mx-auto border border-black rounded-lg">
      <div class="w-full h-auto bg-[#d9d9d9] inline-flex justify-between items-center rounded-[inherit] px-4 py-2">
        <p class="text-center font-normal text-xl">Plano</p>
        <button class="min-w-min px-2 h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Descargar</button>
      </div>
      <div>
        <img src="../assets/images/plano_ctfv.png" alt="" width="100%"srcset="">
      </div>
    </div>
    <div class="inline-flex justify-between">
      <div class="w-1/4 bg-[#d9d9d9] p-4 rounded-lg">
        <div class="bg-white mx-auto min-h-40 rounded-t-sm"></div>
        <div class="w-full inline-flex align-center justify-end my-8 border border-black">
          <button class="min-w-min px-2 h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Ir a Tarifas</button>
        </div>
      </div>
    </div>

    <div class="w-full h-auto mx-auto bg-main-yellow inline-flex justify-center items-center">
      <ctfv_full-logo class="w-1/4 h-min mt-8 mb-4"/>
    </div>
  </main>
</template>
