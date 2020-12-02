<template>
  <div class="write-blog">
    <mavon-editor class="mavon-editor" v-model="context"></mavon-editor>
    <div class="write-blog-html blog-review"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator'

@Component({
  name: 'PhotoIndex',
})

export default class extends Vue {
  [x: string]: any
  private context: string = ''
  private htmlMarkdown!: HTMLDivElement
  @Watch('context')
  onChangeValue(newVal: string, oldVal: string) {
    if(this.htmlMarkdown) {
      console.log(newVal)
      console.log(this.$marked(newVal))
      this.htmlMarkdown.innerHTML = this.$marked(newVal)
    }
  }

  mounted() {
    this.htmlMarkdown = <HTMLDivElement>document.querySelector('.write-blog-html')
  }
}
</script>

<style lang="scss">
  .write-blog {
    width: 100%;
    height: 100%;
    .mavon-editor {
      margin-top: 2%;
      min-height: 90%;
    }
  }
</style>