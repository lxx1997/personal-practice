<template>
  <div class="large-screen">
    <nav-bar class="large-screen-navbar"></nav-bar>
    <div class="large-screen-container">
      <field-personnel class="field-personnel-box"></field-personnel>
      <user-base class="user-base-box"></user-base>
      <work-team class="work-team-box"></work-team>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import NavBar from './Components/header.vue'
import FieldPersonnel from './Components/FieldPersonnel.vue'
import UserBase from './Components/UserBase.vue'
import WorkTeam from './Components/WorkTeam.vue'

@Component({
  name: 'LargeScreen',
  components: {
    NavBar,
    FieldPersonnel,
    UserBase,
    WorkTeam
  }
})
export default class extends Vue {
  
}
</script>

<style lang="scss">
.large-screen {
  width: 100%;
  height: 100%;
  display: flex;
  background: url(../../assets/1.png);
  overflow: auto;
  flex-direction: column;
  &-navbar {
    height: 60px;
    width: 100%;
  }
  &-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
    padding-left: 30px;
    box-sizing: border-box;
    .field-personnel-box {
      margin-top: 20px;
      width: 27%;
      margin-right: 2%;
    }
    .user-base-box {
      margin-top: 20px;
      width: 40%;
    }
    .work-team-box {
      margin-top: 20px;
      width: 27%;
      margin-left: 2%;
    }
  }
}
</style>