<template>
<div class="user">
<div class='navbar'>
    <h1 class="nav-header">我的</h1>
  </div>
  <div class="my-center">
    <img src="../images/center-img.png" alt="">
  </div>
  <div class="group">
    <router-link tag='div' to='user/lookfilm' class="Lookfilm">在线观影</router-link>
    <router-link tag='div' to='user/discount' class="Discount">优惠券</router-link>
    <router-link tag='div' to='user/rebate' class="Rebate">折扣卡</router-link>
  </div>
<NavBar></NavBar>
</div>
</template>

<script>
import NavBar from '../components/NavBar';
export default {
  name: 'Card',
  components: {
    NavBar
  },
};
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";
.user {
  .navbar {
    position: sticky;
    top: 0;
    width: 100%;
    height: px2rem(50.5);
    background: #e54847;
    border-bottom: 1px solid #e54847;
    .nav-header {
      display: block;
      font-size: px2rem(18);
      text-align: center;
      line-height: px2rem(50);
      color: white;
    }
  }
  .my-center {
    width: 100%;
    height: px2rem(150);
    background: #f03d37;
    text-align: center;
    img{
      width: px2rem(66);
      height: px2rem(66);
      border-radius: 50%;
      margin-top: px2rem(40);
    }
  }
  .group{
    height: px2rem(400);
    div{
      margin-top: px2rem(10);
      height: px2rem(44);
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
