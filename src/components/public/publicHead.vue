<template>
    <div class="limit_box">
      <div class="logo">
        <router-link to="/"></router-link>
      </div>
      <ul class="nav">
        <li v-for="(item,index) in headNav" :key="index" v-on:mouseover="change(index)" v-on:mouseout="change(index)">
          <router-link v-if="item.show" :to="item.url">{{item.english}}</router-link>
          <router-link v-else :to="item.url">{{item.chinese}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "head",
    data() {
      return {
        headNav: [
          {
            chinese: '首页',
            english: 'HOME',
            url: '/',
            show: true
          },
          {
            chinese: '关于我们',
            english: 'ABOUT',
            url: '/about',
            show: true
          },
          {
            chinese: '客户案例',
            english: 'PORTFOLIO',
            url: '/portfolio',
            show: true
          },
          {
            chinese: '服务项目',
            english: 'SERVICE',
            url: '/service',
            show: true
          },
          {
            chinese: '新闻资讯',
            english: 'NEWS',
            url: '/news',
            show: true
          },
          {
            chinese: '联系我们',
            english: 'CONTACT',
            url: '/contact',
            show: true
          },
        ]
      }
    },
    methods: {
      change: function(i) {
        this.headNav[i].show = !this.headNav[i].show
      }
    },
  }
</script>

<style scoped>
  .logo {
    float: left;
  }
  .logo a{
    display: inline-block;
    width: 170px;
    height: 80px;
    background: url("../../../static/images/publicImg/logo.png") no-repeat 0 0;
  }
  .nav {
    float: right;
  }
  .nav li {
    width: 100px;
    float: left;
    height: 80px;
    line-height: 80px;
    text-align: center;
    cursor: pointer;
  }
  .nav li a {
    display: block;
    color: #949494;
    font-size: 13px;
  }
</style>
