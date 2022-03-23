<template>
  <div v-editable="blok" class="prose my-24 mx-auto">
    <h1 class="text-3xl text-center">{{ blok.name }}</h1>
    <p class="text-center">{{ blok.intro }}</p>
    <rich-text-renderer :document="blok.body"/>
  </div>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>