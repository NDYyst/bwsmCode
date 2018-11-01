<template>
  <div>
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide stop-swiping">
          <router-link to="/portfolio">
            <img src="../../static/images/indexImg/lb1.jpg" alt="">
          </router-link>
        </div>
        <div class="swiper-slide stop-swiping">
          <router-link to="/service">
            <img src="../../static/images/indexImg/lb2.jpg" alt="">
          </router-link>
        </div>
        <div class="swiper-slide stop-swiping">
          <router-link to="">
            <img src="../../static/images/indexImg/lb3.jpg" alt="">
          </router-link>
        </div>
        <div class="swiper-slide stop-swiping">
          <router-link to="">
            <img src="../../static/images/indexImg/lb4.jpg" alt="">
          </router-link>
        </div>
      </div>
      <!--轮播分页器-->
      <div class="swiper-pagination"></div>
    </div>
    <!--服务范围-->
    <div class="serviceScope limit_box">
      <div class="scopeTit Tit">
        <h2>服务范围</h2>
        <span>OUR SERVICES</span>
      </div>
      <ul class="scopeCon">
        <li>
          <div></div>
          <h3>1.WEB DESIGN</h3>
          <p>
            企业品牌网站设计 / 手机网站制作
            <br>
            动画网站创意设计
          </p>
        </li>
        <li>
          <div></div>
          <h3>2.GRAPHIC DESIGN</h3>
          <p>
            标志LOGO设计 / 产品宣传册设计
            <br>
            企业广告 / 海报设计
          </p>
        </li>
        <li>
          <div></div>
          <h3>3.E-BUSINESS PLAN</h3>
          <p>
            淘宝 / 天猫装修设计及运营推广
            <br>
            企业微博 / 微信营销
          </p>
        </li>
        <li>
          <div></div>
          <h3>4.MAILBOX AGENTS</h3>
          <p>
            腾讯 / 网易企业邮箱品牌代理
            <br>
            个性化邮箱定制开发
          </p>
        </li>
      </ul>
    </div>
    <!--客户案例-->
    <div class="customerCase">
      <div class="limit_box">
        <div class="customerCase_tit">
          <h2>{ 客户案例 }</h2>
          <span>With the best professional technology, to design the best innovative web site</span>
        </div>
        <ul class="customerCase_con">
          <li>
            <router-link to="">
              <img src="../../static/images/indexImg/case1.jpg" alt="">
              <div class="vlock">
                <p>项目名称：凯雷澳眼镜</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <img src="../../static/images/indexImg/case2.jpg" alt="">
              <div class="vlock">
                <p>项目名称：日月谷温泉乡村俱乐部</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <img src="../../static/images/indexImg/case3.jpg" alt="">
              <div class="vlock">
                <p>项目名称：厦门倍特雷贸易</p>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="customerCase_btn">
          <router-link to="/portfolio">VIEW MORE</router-link>
        </div>
      </div>
    </div>
    <!--最新资讯-->
    <div class="newNews limit_box">
      <div class="newNewsTit Tit">
        <h2>最新资讯</h2>
        <span>TEH LATEST NEWS</span>
      </div>
      <div class="newNews_con">
        <div class="newNews_pic">
          <img src="../../static/images/indexImg/news.jpg" alt="">
        </div>
        <ul class="newNews_news">
          <li>
            <span>
              <i>01</i>
              <em>Aug</em>
            </span>
            <div>
              <h3>
                <router-link to="">网站优化几个常见的错误常识</router-link>
              </h3>
              <p>SEO口头禅是为每个网页优化一个或两个关键字，拥有的页面越多，被搜索引擎发现的机会就越大</p></div>
          </li>
          <li>
            <span>
              <i>30</i>
              <em>Jul</em>
            </span>
            <div>
              <h3>
                <router-link to="">企业如何掌握入站营销工作？</router-link>
              </h3>
              <p>网页是您服务的重点，它们应该拥有以下三个关键属性：有组织的设计，有可读性的书面内容和快速加...</p>
            </div>
          </li>
          <li>
            <span>
              <i>28</i>
              <em>Jul</em>
            </span>
            <div>
              <h3>
                <router-link to="">为什么专业公司不喜欢使用模板来创建网站?</router-link>
              </h3>
              <p>很多人都说网页设计已经死，高质量的模板，自动化，成熟的设计模式，人工智能和移动技术正在引领...</p>
            </div>
          </li>
          <li>
            <span>
              <i>26</i>
              <em>Jul</em>
            </span>
            <div>
              <h3>
                <router-link to="">福建润金律师事务所网站设计制作</router-link>
              </h3>
              <p>福建润金律师事务所是在中国大陆合法注册的律师事务所，创始合伙人均曾为国内著名事务所的合伙人...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
  import Swiper from 'swiper';
  export default {
    name: "index",
    mounted() {
      //轮播图配置
      new Swiper('.swiper-container', {
        autoplay:true,
        noSwipingClass : 'stop-swiping',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
      });


    }
  }
</script>

<style scoped>
  /*轮播*/
  .swiper-container {
    width: 100%;
    height: 500px;
  }
   .swiper-wrapper,
   .swiper-wrapper .swiper-slide,
   .swiper-wrapper .swiper-slide a{
     width: 100%;
     height: 100%;
  }
  .swiper-wrapper .swiper-slide a {
    display: block;
    text-align: center;
  }
  /*服务范围*/
  .serviceScope {
    height: 428px;
    overflow: hidden;
  }
  /*服务范围和最新资讯 头部共通*/
  .Tit {
    margin: 52px 0 0px;
    overflow: hidden;
    text-align: center;
  }
  .Tit h2 {
    display: block;
    color: #6d6d6d;
    font-size: 18px;
    font-weight: normal;
    line-height: 30px;
    height: 30px;
    background: url('../../static/images/indexImg/titbg.jpg') no-repeat center 0;
  }
  .Tit span {
    color: #9d9d9d;
    font-family: "Verdana";
    margin-right: 3px;
    line-height: 25px;
    font-size: 12px;
  }
  /*服务范围内容*/
  .serviceScope .scopeCon {
    margin: 33px 0 0;
    overflow: hidden;
  }
  .serviceScope .scopeCon li {
    width: 250px;
    float: left;
    text-align: center;
    border-bottom: 4px solid #fff;
    padding-bottom: 25px;
  }
  .serviceScope .scopeCon li:hover {
    border-bottom: 4px solid #72caba;
  }
  .serviceScope .scopeCon li div {
    height: 120px;
  }
  .serviceScope .scopeCon li h3 {
    color: #747474;
    font-family: Calibri;
    font-size: 20px;
    margin: 8px 0 12px;
  }
  .serviceScope .scopeCon li p {
    height: 45px;
    line-height: 22px;
    color: #999999;
    font-size: 14px;
  }
  .serviceScope .scopeCon li:nth-child(1) div {
    background: url('../../static/images/indexImg/web1.png') no-repeat center 0;
  }
  .serviceScope .scopeCon li:nth-child(1):hover div {
    background: url('../../static/images/indexImg/web2.png') no-repeat center 0;
  }
  .serviceScope .scopeCon li:nth-child(2) div {
    background: url('../../static/images/indexImg/graphic1.png') no-repeat center 0;
  }
  .serviceScope .scopeCon li:nth-child(2):hover div {
    background: url('../../static/images/indexImg/graphic2.png') no-repeat center 0;
  }
  .serviceScope .scopeCon li:nth-child(3) div {
    background: url('../../static/images/indexImg/e-bussiness1.png') no-repeat center 0;
  }
  .serviceScope .scopeCon li:nth-child(3):hover div {
    background: url('../../static/images/indexImg/e-bussiness2.png') no-repeat center 0;
  }
  .serviceScope .scopeCon li:nth-child(4) div {
    background: url('../../static/images/indexImg/mail1.png') no-repeat center 0;
  }
  .serviceScope .scopeCon li:nth-child(4):hover div {
    background: url('../../static/images/indexImg/mail2.png') no-repeat center 0;
  }
  /*客户案例*/
  .customerCase {
    height: 462px;
    background: #f8f8f8;
    overflow: hidden;
  }
  .customerCase .customerCase_tit {
    margin: 52px 0 0px;
    overflow: hidden;
    text-align: center;
  }
  .customerCase .customerCase_tit h2 {
    color: #66c5b4;
    font-size: 18px;
    background: none;
    font-weight: normal;
    line-height: 30px;
    height: 30px;
  }
  .customerCase .customerCase_tit span {
    color: #9d9d9d;
    margin-right: 3px;
    line-height: 25px;
    font-size: 12px;
    font-family: Verdana;
  }
  .customerCase .customerCase_con {
    margin-top: 37px;
    overflow: hidden;
  }
  .customerCase .customerCase_con li {
    width: 313px;
    float: left;
    margin: 0 10px;
  }
  .customerCase .customerCase_con li a,
  .customerCase .customerCase_con li a img {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .customerCase .customerCase_con li a .vlock {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: url('../../static/images/indexImg/caselock.png') no-repeat center 0;
  }
  .customerCase .customerCase_con li a:hover .vlock {
    display: block;
  }
  .customerCase .customerCase_con li a .vlock p {
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 120px;
    height: 30px;
  }
  .customerCase .customerCase_btn {
    margin-top: 40px;
  }
  .customerCase .customerCase_btn a {
    display: block;
    width: 165px;
    height: 35px;
    line-height: 35px;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    background: url('../../static/images/indexImg/casecur.png') no-repeat center center;
  }
  .customerCase .customerCase_btn a:hover {
    text-decoration: underline;
    background: url('../../static/images/indexImg/casehover.png') no-repeat center center;
  }
  /*最新资讯*/
  .newNews .newNews_con {
    margin: 50px 0 60px;
    overflow: hidden;
  }
  .newNews .newNews_con ,newNews_pic {
    float: left;
    width: 234px;
    margin-right: 2px;
  }
  .newNews .newNews_con .newNews_news {
    float: left;
    height: 196px;
    width: 762px;
  }
  .newNews .newNews_con .newNews_news li {
    width: 50%;
    height: 74px;
    margin-bottom: 40px;
    float: left;
    margin-right: 0;
  }
  .newNews .newNews_con .newNews_news li span {
    display: block;
    width: 74px;
    height: 74px;
    text-align: center;
    border-right: 1px solid #e3e3e3;
    float: left;
    margin-right: 16px;
  }
  .newNews .newNews_con .newNews_news li span i {
    font-size: 36px;
    color: #66c5b4;
    font-weight: bold;
    display: block;
    font-style: normal;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .newNews .newNews_con .newNews_news li span em {
    width: 100%;
    font-size: 18px;
    color: #999;
    display: block;
    font-style: normal;
  }
  .newNews .newNews_con .newNews_news li div {
    width: 288px;
    float: left;
    height: 74px;
    overflow: hidden;
  }
  .newNews .newNews_con .newNews_news li div h3 {
    font-size: 18px;
  }
  .newNews .newNews_con .newNews_news li div h3 a {
    font-size: 14px;
    color: #666;
    font-weight: normal;
  }
  .newNews .newNews_con .newNews_news li div h3 a:hover {
    text-decoration: underline;
  }
  .newNews .newNews_con .newNews_news li div p {
    font-size: 12px;
    color: #a9a9a9;
    margin-top: 10px;
    line-height: 22px;
  }
</style>
