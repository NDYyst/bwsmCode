<template>
  <div>
    <div class="foot_tz">
      <div class="limit_box">
        <div class="copyright">
          <span>版权所有：厦门博文尚美文化传媒有限公司 备案号: 闽ICP备14019206号-1</span>
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
    </div>
    <div class="limit_box foot_wztz">
      <ul class="wztz l">
        <li>Links:</li>
        <li>
          <router-link to="/">律师网站建设 </router-link>|
        </li>
        <li>
          <router-link to="/">厦门网站建设 </router-link>|
        </li>
        <li>
          <router-link to="/">网页特效库 </router-link>|
        </li>
        <li>
          <router-link to="/">广州网站建设 </router-link>|
        </li>
        <li>
          <router-link to="/">天津网站建设 </router-link>|
        </li>
        <li>
          <router-link to="/">济南网站建设 </router-link>|
        </li>
        <li>
          <router-link to="/">广告中国 </router-link>|
        </li>
        <li>
          <router-link to="/">上海律师事务所排名 </router-link>|
        </li>
        <li>
          <router-link to="/">律师微名片 </router-link>|
        </li>
        <li>
          <router-link to="/">厦门网站设计 </router-link>|
        </li>
        <li>
          <router-link to="/">律师营销 </router-link>|
        </li>
        <li>
          <router-link to="/">厦门网站制作 </router-link>|
        </li>
        <li>
          <router-link to="/">嘉兴网络公司 </router-link>|
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "foot",
  }
</script>

<style scoped>
  a:hover {
    text-decoration: underline;
  }
  .foot_tz {
    width: 100%;
    background: #66c5b4;
  }
  .foot_tz .limit_box {
    height: 54px;
    line-height: 54px;
    color: #fff;
    font-size: 13px;
  }
  .foot_tz .limit_box .copyright {
    float: left;
  }
  .foot_tz .limit_box .footNav {
    float: right;
  }
  .foot_tz .limit_box ul li {
    float: left;
  }
  .foot_tz .limit_box .footNav li a {
    margin: 0 10px;
    color: #fff;
  }
  .foot_wztz {
    color: #888;
    font-size: 13px;
    padding-top: 30px;
  }
  .foot_wztz .wztz li {
    float: left;
    line-height: 30px;
  }
  .foot_wztz .wztz li a {
    margin: 0 3px;
    color: #888;
  }
</style>

