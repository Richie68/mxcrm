<template>
  <div>
    <Component
      :is="link.url ? 'Link' : 'span'"
      v-for="link in links"
      :href="link.url"
      v-html="link.label"
      class="mr-1 px-1 text-purple-light"
      :class="{ 'border-none text-gray-500': ! link.url, 'font-bold text-purple' : link.active }"
    />
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  }
};
</script>
