<template>
    <div>
      <div class="advertising"></div>
      <div class="limit_box">
        <div class="picF">
          <img src="../../../static/images/aboutImg/aboutc.jpg" alt="">
        </div>
        <div class="conR">
          <p>
            <br>
            <br>
            <br>
            <img alt="" src="../../../static/images/aboutImg/who.jpg" style="width: 476px; height: 80px">
          </p>
          <p>
            <br>
            厦门博文尚美文化传媒有限公司前身为厦门零点视觉设计成立于2006年，拥有10年的专业网站设计经验，以领先的设计水准和技术开发能力，为近千家知名品牌企业建立全面的、以结果为导向的企业在线门户形象。
          </p>
          <p>&nbsp;</p>
          <p>我们服务的品牌客户有：美克、申鹭达，厦门第一医院，厦门理工学院，金门马拉松，台湾南投同乡会联合总会；涉猎集团、上市公司、服装、房地产、电子科技等众多行业，并树立了良好的口碑，积累了丰富的经验和成功案例，我们的专业服务水准以及良好的售后服务质量赢得了客户的广泛认可。</p>
          <p>&nbsp;</p>
          <p>我们的理念：信为先 质为本 精于业&nbsp;</p>
        </div>
      </div>
      <div class="border"></div>
    </div>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style scoped>
  .advertising {
    width: 100%;
    height: 430px;
    background: url("../../../static/images/aboutImg/about.jpg") no-repeat center 0;
  }
  .limit_box .picF {
    float: left;
  }
  .limit_box .conR {
    float: right;
    width: 500px;
    padding: 30px 20px;
  }
  .limit_box .conR p {
    font-size: 12px;
    line-height: 24px;
    color: #999;
  }
  .border {
    width: 100%;
    height: 1px;
    background: #999;
  }
</style>
