<template>
  <div class="films-list">

    <Hader></Hader>

    <!-- 定位城市 -->
    <div class="city-fixed">
      <router-link to="/city" tag="span">{{ curCity }}</router-link>
      <i class="iconfont icon-xiala"></i>
    </div>
    <!-- /定位城市 -->

    <!-- tab-bar -->
    <div class="tab-bar-wrapper">
      <ul class="tab-bar">
        <li :class="{'z-act': $route.path === '/films/nowPlaying'}" @click="switchList('now')">
          <span>正在热映</span>
        </li>
        <li :class="{'z-act': $route.path === '/films/comingSoon'}" @click="switchList('soon')">
          <span>即将上映</span>
        </li>
      </ul>
      <router-link tag='div' to='/cinemas/search'><img src="../images/search.png" alt="" class="search_img"></router-link>
    </div>
    <!-- /tab-bar -->
    <router-view></router-view>

  </div>
</template>

<script>

import Hader from '../components/Hader';

export default {
  name: 'Films',

  components: {
    Hader
  },

  data () {
    return {
      // 当前城市
      curCity: ''
    }
  },

  methods: {
    /**
     * 根据百度地图地位的api。获取当前的城市
     */
    getCityName () {
      /* eslint-disable */
      let myCity = new BMap.LocalCity();
      myCity.get((result) => {
        this.curCity = result.name;
      })
    },

    /**
     * 切换路由
     */
    switchList (type) {
      if (type === 'now') {
        // this.$router.push('/films/nowPlaying');
        this.$router.push({
          name: 'nowPlaying'
        })
      } else {
        this.$router.push('/films/comingSoon');
      }
    }
  },

  created () {
    this.getCityName();
  },

}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
@import 'swiper/dist/css/swiper.min.css';
.films-list {
  flex: 1;
  overflow-y: auto;
}


.city-fixed {
  position: sticky;
  top: px2rem(57);
  display: inline-block;
  z-index: 999;
  height: px2rem(30);
  line-height: px2rem(30);
  font-size: px2rem(15);
  color: #666;
  border-radius: px2rem(15);
  text-align: center;
  padding: 0 px2rem(5);
}

.tab-bar-wrapper {
  position: sticky;
  z-index: 99;
  top: px2rem(50);
  width: 100%;
  height: px2rem(50);
  display: inline-block;
  border-bottom: px2rem(1) solid #ededed;
  background: #fff;
  margin-top: px2rem(-40);
  .tab-bar {
    display: flex;
    width: px2rem(218);
    height: px2rem(50);
    align-items: center;
    position: absolute;
    left: px2rem(80);
    li {
      flex: 1;
      text-align: center;
      font-size: px2rem(14);
      height: px2rem(20);
      span {
        padding: 0 px2rem(10);
      }
      &.z-act {
         color: #ef4238;
         border-bottom: 1px solid #ef4238;
      }
    }
  }
  .search_img{
    position: absolute;
    top: px2rem(10);
    left: px2rem(330);
    width: px2rem(25);
    height: px2rem(25);
  }
}

</style>
