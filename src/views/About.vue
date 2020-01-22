<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ money | changeNum }}</h1>
    <h2>{{ money | changeMoney }}</h2>
    <input type="text" v-focus>
    <select name="ss" id="s1">
      <option :value="item.value" v-for="item in orderStatus" :key="item.value">{{item.label}}</option>
    </select>
  </div>
</template>
<script>
  import config from '@/utils/config'
    export default {
      data() {
        return {
          money: 99,
          orderStatus: config.orderStatus
        }
      },
      mounted() {
      }
    }
</script>
