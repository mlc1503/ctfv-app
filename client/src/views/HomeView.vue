<script setup lang="ts">
import navbar from "../components/navbar.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
  // https://vue3datepicker.com/
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from "vue";

var ctfv_status = ref({ 
  statusCode: 0, 
  custom_stateMessage: "test"
});

var date = ref(null);
</script>
<template>
  <main>
    <navbar/>
    
    <img src="../assets/images/trenR.png" width="100%">
    
    <div v-if="ctfv_status.statusCode == 0" class="w-9/12 h-auto bg-desat-primary-blue border border-primary-blue mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center text-primary-blue font-normal text-xl">
        Todas las líneas funcionan con normalidad.
      </p>
    </div>
    <div v-else-if="ctfv_status.statusCode == 1" class="w-9/12 h-auto bg-desat-main-yellow border border-warning-ocre mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center text-warning-ocre font-normal text-xl">
        {{ ctfv_status.custom_stateMessage }}
      </p>
    </div>
    <div v-else-if="ctfv_status.statusCode == 2" class="w-9/12 h-auto bg-desat-red border border-warning-red mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center text-warning-red font-normal text-xl">
        {{ ctfv_status.custom_stateMessage }}
      </p>
    </div>
    <div v-else class="w-9/12 h-auto bg-neutral-300 border border-black mx-auto rounded-lg flex flex-col justify-center items-center p-4">
      <p class="text-center font-normal text-xl">
        No hay información sobre el estado del servicio. Disculpe las molestias.
      </p>
    </div>

    <div class="flex flex-col items-start justify-center">
      <div className="w-1/3 h-auto inline-flex flex-col items-center gap-8 p-4 relative mt-16 bg-[#d9d9d9] rounded-lg mx-auto shadow-md">
        
        <div className="w-full items-start justify-between gap-2.5 flex flex-col lg:flex-row lg:items-end">
          <div className="h-full block w-auto">
            <label class="text-2xl font-normal" for="origenEstacion">Origen:</label>
            <input type="text" id="origEstacion" placeholder="Camporrobles" class=" w-full min-h-10 p-3 mt-1 rounded-md border-gray-200 border shadow-sm md:text-base"/>
          </div>
          <img className="relative w-10 h-10 p-0.5 bg-white rounded-full rotate-90 lg:rotate-0" alt="Vector" src="../components/icons/flechas.svg" />
          <div className="h-full block w-auto">
            <div class="flex-col items-end gap-y-10">
              <label class="text-2xl font-normal" for="destEstacion">Destino:</label>
              <input type="text" id="destEstacion" placeholder="Camporrobles" class="w-full min-h-10 p-3 mt-1 rounded-md border-gray-200 border shadow-sm md:text-base"/>
            </div>
          </div>
        </div>

        <div className="w-full h-auto items-center justify-between inline-flex">
          <div className="h-full w-full">
            <!--TODO: estilizar datepicker. link a docum en los imports -->
            <vue-date-picker time-picker-inline v-model="date"/>
          </div>
          <div class="w-[8rem]"></div>
          <div className="h-full w-full flex justify-start items-center">
            <button class="w-1/2 h-10 rounded-lg bg-primary-blue text-white text-center font-normal text-xl" type="button">Buscar</button>
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>
