<template>
  <div>
    <broken-line></broken-line>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import Components from './components/index.js'
@Component({
  name: 'VCharts',
  components: {
    ...Components
  }
})
export default class extends Vue {

}
</script>

<style lang="scss">

</style>