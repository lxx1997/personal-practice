<template>
  <table border="1" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>sex</td>
        <td>age</td>
      </tr>
      <tr>
        <td>1</td>
        <td>梨花</td>
        <td>男</td>
        <td>13</td>
      </tr>
      <tr>
        <td>2</td>
        <td>利息费</td>
        <td>女</td>
        <td>15</td>
      </tr>
      <tr>
        <td>3</td>
        <td>息费</td>
        <td>女</td>
        <td>15</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'

  @Component
  export default class TableOperation extends Vue{
    private name() {
      
    }
  }
</script>

<style lang="css">
  table tr td {
    width: 100px;
    text-align: center;
  }
</style>