<template>
  <div class='filmDetail'>
    <div class='navbar'>
    <img src='../images/back.png' onclick="javascript: window.history.back()">
    <h1 class="nav-header">猫眼电影</h1>
  </div>
  <div class="film-detail">
    <div class="film-poster">
      <img src="https://pic.maizuo.com/usr/movie/f713d0f85512087679ac951e8565d187.jpg?x-oss-process=image/quality,Q_70" alt="">
    </div>

    <div class="film-detail">
  <div class="nav-wrap filter-nav-wrap">
    <div class="tab mb-line-b">
      <div class="item">
      全城
      <i class="iconfont icon-xiala"></i>
      </div>
      <div class="item">品牌
      <i class="iconfont icon-xiala"></i></div>
      <div class="item">特色
      <i class="iconfont icon-xiala"></i></div>
    </div>
  </div>

    <div class="cinema-list" v-for="(item, index) in cinema" :key="index">
    <div class="list-wrap">
      <div class="item mb-line-b">
        <div class="title-block box-flex middle">
          <div class="title line-ellipsis">
            <span>{{ item.nm }}</span>
            <span class="price-block">
              <span class="price">{{ item.sellPrice }}</span>
              <span class="q">元起</span>
            </span>
          </div>
          <div class="location-block box-flex">
            <div class="flex line-ellipsis">{{item.addr}}</div>
            <div class="distance">{{ item.distance }}</div>
          </div>
          <div class="flex"></div>
          <div class="label-block">
            <div class="snack">小吃</div>
            <div class="vipTag">{{ item.tag.vipTag }}</div>
          </div>
          <div class="discount-block">
            <div>{{ item.promotion.cardPromotionTag }}</div>
            <div>{{ item.promotion.platformActivityTag }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div class="toggle">
        <i class="iconfont icon-xiala"></i>
      </div>
    </div>

    <!-- <router-link to="/film/9898">我要看猫王</router-link>  -->
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FilmDetail',

  data () {
    return {
      filmName: '',
      cinema: [] // 列表页数据
    }
  },

  watch: {
  },

  methods: {
    getdata () {
      axios.get('api/cinema/list').then(res => {
        // console.log(res.data.data);
        // 数组解构赋值
        this.cinema.push(...res.data.data);
      });
    }
  },

  created () {
    this.getdata();
  },

  beforeRouteEnter (to, from, next) {
    console.log('进入到详情');
    next();
  },

  beforeRouteUpdate (to, from, next) {
    console.log('详情页组件路由有更新的情况, 会进来');
    // 上面 watch $route 的代码可以在这里写
    this.getFilmDetail();
    next();
  },

  beforeRouteLeave (to, from, next) {
    console.log('详情页离开之前，会调用');
    next();
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
.filmDetail{
  .nav-header{
    margin-top: px2rem(-50);
  }
.film-detail {
  flex: 1;
  overflow-y: auto;

  .nav-wrap.filter-nav-wrap {
    position: sticky;
    top: px2rem(7);
    width: 100%;
    height: px2rem(40);
    z-index: 10;
    background-color: #fff;
    .tab {
      display: -webkit-box;
      display: flex;
      border-bottom: 1px solid #e8e8e8;
      .item {
        -webkit-box-flex: 1;
        flex: 1;
        text-align: center;
        line-height: px2rem(40);
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        font-size: px2rem(13);
        text-overflow: ellipsis;
        color: #777;
        border-right: 0.5px solid #e8e8e8;
      }
    }
  }

  .cinema-list {
    background-color: #fff;
    border-bottom: 1px solid #b2b2b2;
    .list-wrap {
      background-color: #fff;
      .item {
        padding: px2rem(13) px2rem(15) px2rem(13) 0;
        margin-left: px2rem(15);
        background-color: #fff;
        position: relative;
        overflow: hidden;
      }
      .title-block {
        display: block;
        .title {
          height: px2rem(23);
          line-height: px2rem(23);
          font-size: px2rem(16);
          color: #000;
          span {
            height: px2rem(23);
            line-height: px2rem(23);
            font-size: px2rem(12);
            // color: #000;
          }
        }
        .label-block {
          height: px2rem(17);
          line-height: px2rem(17);
          margin-top: px2rem(4);
          margin-bottom: px2rem(4);
          overflow: hidden;
          font-size: 0;
          flex-shrink: 0;
          .snack {
            color: #f90;
            border: 1px solid #f90;
          }
          .vipTag {
            margin-left: px2rem(5);
            color: #f90;
            border: 1px solid #f90;
          }
          div {
            position: relative;
            display: inline-block;
            padding: 0 px2rem(3);
            height: px2rem(15);
            line-height: px2rem(15);
            border-radius: px2rem(2);
            font-size: 0.3rem;
          }
        }
      }
      .price-block {
        padding-top: px2rem(9);
        padding-left: px2rem(3);
        span {
          color: #f03d37;
        }
        .price {
          font-size: px2rem(18);
        }
        .q {
          margin-left: px2rem(3);
          font-size: px2rem(11);
          color: #f03d37;
        }
      }
      .location-block {
        margin-top: px2rem(6);
        font-size: px2rem(13);
        color: #666;
        .flex {
          -webkit-box-flex: 1;
          flex: 1;
        }
        .line-ellipsis {
          width: px2rem(312);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .distance {
          margin-left: px2rem(5);
          display: initial;
          position: absolute;
          left: px2rem(300);
          top: px2rem(40);
        }
      }
    }
    .discount-block {
      color: #999;
      margin-bottom: px2rem(4);
      div {
        margin: px2rem(5) 0;
        margin-left: 0;
        font-size: px2rem(11);
      }
    }
  }

  .film-poster {
    height: px2rem(210);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .film-detail {
    padding: px2rem(15);
    padding-top: px2rem(12);
    background-color: #fff;

    .col {
      display: flex;
      align-items: center;
    }

    .film-name {
      flex: 1;
      display: flex;
      align-items: center;

      .name {
        color: #191a1b;
        font-size: px2rem(18);
        height: px2rem(24);
        line-height: px2rem(24);
        margin-right: px2rem(8);
      }

      .item {
        font-size: px2rem(12);
        color: #fff;
        background-color: #d2d6dc;
        height: px2rem(14);
        line-height: px2rem(14);
        padding: 0 px2rem(2);
        border-radius: px2rem(2);
        display: inline-block;
      }
    }

    .film-grade {
      flex-shrink: 0;
      width: px2rem(100);
      text-align: right;
      color: #ffb232;
      font-size: px2rem(12);

      .grade {
        font-size: px2rem(18);
        font-style: italic;
      }
    }

    .grey-text {
      font-size: px2rem(13);
      line-height: px2rem(20);
      color: #797d82;
      margin-top: px2rem(4);
    }

    .film-synopsis {
      margin-top: px2rem(8);
      overflow: hidden;
      &.hide {
        height: px2rem(40);
      }
    }

    .toggle {
      text-align: center;
      &.hide {
        i {
          transform: translate(180deg);
        }
      }
    }
  }
}
}
</style>
