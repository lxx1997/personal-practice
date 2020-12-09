<template>
  <div class="field-personnel-svg-box">
    <slot name="title" class="title"></slot>
    <svg-icon :icon-class="iconClass" :class-name="className"></svg-icon>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator'
@Component({
  name: 'UserBase',
})
export default class extends Vue {
  // receive iconClass
  @Prop({
    type: String,
    default: ''
  })
  iconClass: string | null

  // receive className
  @Prop({
    type: String,
    default: ''
  })
  className: string | null

}
</script>

<style lang="scss">
.field-personnel-svg-box {
  // flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>