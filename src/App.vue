<template>
  <div id="app">
    <wHeader v-if="$route.meta.showNav != false"></wHeader>
    <router-view></router-view>
    <wFooter v-if="$route.meta.showNav != false"></wFooter>
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
