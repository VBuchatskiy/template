<template>
  <hello-world />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue')
  }
})
export default class App extends Vue {}
</script>
