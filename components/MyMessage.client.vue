<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String || Date,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <div class="flex justify-start">
        <div class="bg-blue-500 text-white p-2 rounded-lg text-sm max-w-72">
          <div class="font-bold">{{ name }}</div>
          <div class="flex justify-between items-end">
            <div>
              {{ message }}
            </div>
            <div class="ml-2 text-[8px] opacity-75">
              {{ formatDateToHhMm(timestamp) }}
            </div>
          </div>
        </div>
      </div>
      <div class="h-8 w-8 rounded-full bg-blue-500 ml-2">
        <div
          class="text-white text-sm flex items-center justify-center h-full w-full"
        >
          {{ name[0] }}
        </div>
      </div>
    </div>
  </div>
</template>
