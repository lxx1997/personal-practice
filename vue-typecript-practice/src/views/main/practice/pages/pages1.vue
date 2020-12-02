<template>
  <div>
    <!-- <drag></drag> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import Drag from '../components/drag.vue'

@Component({
  name: 'PracticeIndex',
  components: {
    Drag
  }
})
export default class extends Vue {
  
}
</script>

<style lang="scss">
</style>