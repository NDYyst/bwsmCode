<template>

</template>

<script>
  export default {
    name: "news",
  }
</script>

<style scoped>
  .btn {
    text-align: center;
  }
  button {
    margin: 50px 0;
    padding: 10px;
    cursor: pointer;
  }
  /*蒙版*/
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: #000;
    opacity: .8;
  }
  /*抽奖*/
  .smashEggs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
  }
  .smashEggs .smash {
    display: block;
    position: fixed;
    top: 30%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10001;
    width: 360px;
    height: 300px;
  }
  .smashEggs .smash .caiDai {
    position: absolute;
    top: 2%;
    left: 2%;
    width: 100px;
    z-index: 10001;
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .smashEggs .smash .eggs{
    position: absolute;
    top: 56%;
    left: 50%;
    width: 48%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10001;
  }
  .smashEggs .smash .hammer{
    position: absolute;
    top: 0;
    right: 30px;
    width: 30%;
    z-index: 10002;
    -moz-transform-origin: bottom right;
    -webkit-transform-origin: bottom right;
    transform-origin: bottom right;
    -moz-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
    -moz-animation: chuizi 1.5s ease 3;
    -webkit-animation: chuizi 1.5s ease 3;
    animation: chuizi 1.5s ease 3;
  }
  @keyframes chuizi {
    0% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    30% {
      -moz-transform: rotate(-25deg);
      -ms-transform: rotate(-25deg);
      -webkit-transform: rotate(-25deg);
      transform: rotate(-25deg);
    }
    100% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
  }
  @-webkit-keyframes chuizi {
    0% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    30% {
      -moz-transform: rotate(-25deg);
      -ms-transform: rotate(-25deg);
      -webkit-transform: rotate(-25deg);
      transform: rotate(-25deg);
    }
    100% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
  }
  @-moz-keyframes chuizi {
    0% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    30% {
      -moz-transform: rotate(-25deg);
      -ms-transform: rotate(-25deg);
      -webkit-transform: rotate(-25deg);
      transform: rotate(-25deg);
    }
    100% {
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
  }
  .smashEggs .smash p {
    position: absolute;
    bottom: 6%;
    width: 100%;
    text-align: center;
    font-size: 16px;
    background-image: -webkit-linear-gradient(#F9DBA1 50%, #D0AB71 100%);
    /* Opera 11.1 - 12.0 */
    background: -o-linear-gradient(#F9DBA1 50%, #D0AB71 100%);
    /* Firefox 3.6 - 15 */
    background: -moz-linear-gradient(#F9DBA1 50%, #D0AB71 100%);
    /* 标准的语法 */
    background: linear-gradient(#f9dba1 50%, #d0ab71 100%);
    -webkit-background-clip: text;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
  }
  /*中奖*/
  @keyframes scale{
    0% {
      transform: scale(.2);
    }
    80% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .smashEggs .prize {
    position: absolute;
    top: -25%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
    z-index: 10002;
    width: 400px;
    height: 480px;
    background: url('../../assets/img/prize.png') no-repeat center / cover;
    animation: scale 1.1s forwards;
  }
  .smashEggs .prize .close {
    width: 64px;
    height: 64px;
    margin-top: 30px;
    float: right;
    background: url("../../assets/img/close.png") no-repeat center/cover;
  }
  .smashEggs .prize .content {
    margin-top: 110px;
    width: 100%;
    height: 360px;
    color: #fff;
  }
  .smashEggs .prize .content p {
    text-align: center;
    font-size: 20px;
  }
  .smashEggs .prize .content .title {
    padding: 50px 0;
    font-size: 30px;
  }
  .smashEggs .prize .content .button{
    cursor: pointer;
    width: 247px;
    height: 57px;
    line-height: 57px;
    font-size: 30px;
    color: #C69B58;
    text-align: center;
    border-radius: 60px;
    background: #fff;
    margin: 80px auto 0;
    box-shadow: 10px 5px 30px -5px #9B5100;
  }
</style>
