<template>
  <div class="limit_box">
    <div class="copyright">
      <span>Copyright 2006- 2014 Bowenshangmei Culture All Rights Reserved</span>
    </div>
    <ul class="footNav">
      <li>
        <router-link to="/">Home</router-link>|
      </li>
      <li>
        <router-link to="/about">About</router-link>|
      </li>
      <li>
        <router-link to="/portfolio">Portfolio</router-link>|
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "indexFoot"
  }
</script>

<style scoped>
  a:hover {
    text-decoration: underline;
  }
  .limit_box {
    height: 54px;
    line-height: 54px;
    color: #999;
    font-size: 13px;
  }
  .limit_box .copyright {
    float: left;
  }
  .limit_box .footNav {
    float: right;
  }
  .limit_box ul li {
    float: left;
  }
  .limit_box .footNav li a {
    margin: 0 10px;
    color: #999;
  }
</style>
