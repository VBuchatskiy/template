<template>
  <gif-gallery />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    GifGallery: () => import('@/components/GifGallery.vue')
  }
})
export default class App extends Vue {}
</script>
