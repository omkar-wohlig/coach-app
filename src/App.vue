<template>
  <header-bar></header-bar>
  <router-view> </router-view>
</template>


<script>
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  components: {
    HeaderBar
  },
};
</script>

<style>
@import '/public/font.scss';
body{
    margin: 0px !important;
}
</style>