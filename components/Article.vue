<template>
  <div v-editable="blok" class="prose my-24 mx-auto container">
    <h1 class="text-3xl text-center my-3">{{ blok.name }}</h1>
    <p class="text-center my-3">{{ blok.intro }}</p>
    <rich-text-renderer class="my-3" :document="blok.body"/>
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