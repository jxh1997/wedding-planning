<template>
  <div id="app">
    <wHeader></wHeader>
    <router-view></router-view>
    <wFooter></wFooter>
  </div>
</template>

<script>
import wHeader from "@/components/HeaderComponet/Header";
import wFooter from "@/components/FooterComponet/Footer";


export default {
  name: "app",
  components: {
    wHeader,
    wFooter
  },
  created() {
  }
};
</script>

<style>
</style>
