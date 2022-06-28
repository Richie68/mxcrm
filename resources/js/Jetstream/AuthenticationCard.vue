<template>
  <div class="relative z-10 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    <div>
      <slot name="logo" />
    </div>

    <div class="w-full sm:max-w-md mt-6 px-6 py-4 border bg-white border-main overflow-hidden sm:rounded-lg">
      <slot />
    </div>
  </div>
</template>
