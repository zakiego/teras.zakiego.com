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
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-start">
      <div class="h-8 w-8 rounded-full bg-blue-500 mr-2">
        <div class="text-white text-sm flex items-center justify-center h-full w-full">
          {{ name[0] }}
        </div>
      </div>
      <div class="flex justify-start">
        <div class="bg-blue-500 text-white p-2 rounded-lg text-sm max-w-72">
          <div class="font-bold">{{ name }}</div>
          <div class="flex space-x-3">
            <div>
              {{ message }}
            </div>
            <div class="text-xs opacity-75 justify-end items-end flex">{{ timestamp }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
