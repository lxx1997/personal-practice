<template>
  <div>
    this is photo wall index
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

interface PhotoList {
  name: string,
  url: string,
  desc: string,
  time: string,
  autor: string,
  size: number
}

@Component({
  name: 'PhotoWallIndex',
})
export default class extends Vue {
  private photoList!: PhotoList[]
  private list!: PhotoList[]
  mounted() {
    this.photoList = [
      {
        name: '1',
        desc: '1',
        url: '1',
        autor:'1',
        time: '1',
        size: 1
      }
    ]
  }
}
</script>

<style lang="scss">
</style>