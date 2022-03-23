<template>
  <div
    v-editable="blok"
    class="py-2 text-center animate__animated animate__slideInLeft">
    <img
      class="mx-auto h-35 animate__animated animate__bounce animate__infinite animate__slower animate__delay-2s"
      :src="blok.icon">
    <h1 class="text-lg">{{ blok.name }}</h1>
    <p class="text-gray-600">
      {{ blok.description }}
    </p>
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