<template>
  <div id="app">
    <publicHead></publicHead>
    <router-view/>
    <indexFoot v-if="$route.meta.indexFootShow"></indexFoot>
    <foot v-if="$route.meta.footShow"></foot>
  </div>
</template>

<script>
  import publicHead from './components/public/publicHead'
  import foot from  './components/public/foot'
  import indexFoot from './components/public/indexFoot'
  export default {
    name: 'App',
    components: {
      publicHead,
      foot,
      indexFoot
    },
  }
</script>

<style>
  #app {
    width: 100%;
    z-index: 1000;
    background: #fff;
    opacity: 0.9;
  }
  *{margin: 0; padding: 0}
  .limit_box {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  /*轮播分页器改变样式*/
  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    display: inline-block;
    border-radius: 100%;
    background: transparent;
    opacity: 1;
    border: 2px solid #fff
  }
  .swiper-pagination-bullet-active {
    background: #fff;
  }

</style>
