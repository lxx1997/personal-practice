<template>
  <ve-line :data="charData"></ve-line>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
@Component({
  name: "BrokenLine"
})
export default class extends Vue {
  private charData = {
    columns: ['日期', '访问用户', '下单用户', '下单率'],
    rows:[
      {'日期': '1/1', '访问用户': 12313, '下单用户': 10000, '下单率': 0.32},
      {'日期': '1/2', '访问用户': 1313, '下单用户': 100, '下单率': 0.42},
      {'日期': '1/3', '访问用户': 2313, '下单用户': 1000, '下单率': 0.12},
      {'日期': '1/4', '访问用户': 113, '下单用户': 100, '下单率': 0.62},
    ]
  }
}
</script>

<style lang="scss">

</style>