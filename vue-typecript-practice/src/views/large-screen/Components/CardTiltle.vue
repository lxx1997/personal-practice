
<template>
  <div class="modle-template">
    <dv-border-box-10>
      <div class="modle-template-title">
        <dv-decoration-5 style="width:300px;height:60px;"></dv-decoration-5>
        <div class="modle-template-title-content">
          <slot name="title"></slot>
        </div>
      </div>
      <slot></slot>
    </dv-border-box-10>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'ModleShowTemplate'
})
export default class extends Vue {

}
</script>

<style lang="scss">
.modle-template {
  color: #ffffff;
  .modle-template-title {
    min-width: 300px;
    position: relative;
    .dv-decoration-5 {
      margin-left: 50%;
      transform: translateX(-50%);
    }
    .modle-template-title-content {
      position: absolute;
      width: 100%;
      top: 5px;
      text-align: center;
    }
  }
}
</style>