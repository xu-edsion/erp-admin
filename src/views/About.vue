<template>
  <div class="about">
      <h1>This is an about page</h1>
      <hello-world msg="install"></hello-world>
      <h1>{{money | changeNum}}</h1>
      <h2>{{money | changeMoney}}</h2>
      <input type="text" v-focus>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          money: 99
        }
      }
    }
</script>
