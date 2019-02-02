<template>
  <div class="cinemas-list">
    <div class='navbar'>
    <h1 class="nav-header">影院</h1>
  </div>
  <div class="gray-bg topbar-bg ">
    <div class="city-entry">
    <router-link to='/city' class="city-name" tag='span'>{{ curCity }}<i class="iconfont icon-xiala"></i></router-link>
    </div>
    <router-link to='/cinemas/search' tag ='input' class="search-entry search-input search" placeholder="搜影院">
    </router-link>
  </div>
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
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cinema',
  data () {
    return {
      cinema: [], // 列表页数据
      curCity: '' // 当前城市
    };
  },
  methods: {
    getdata () {
      axios.get('api/cinema/list').then(res => {
        // console.log(res.data.data);
        // 数组解构赋值
        this.cinema.push(...res.data.data);
      });
    },
    getCityName () {
      /* eslint-disable */
      let myCity = new BMap.LocalCity();
      myCity.get((result) => {
        this.curCity = result.name;
      })
    }
  },
  // 执行getdata方法(请求接口)
  created () {
    this.getdata();
    this.getCityName();
  }
};
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";

.cinemas-list {
  flex: 1;
  overflow-y: auto;
  .navbar {
    width: 100%;
    height: px2rem(50.5);
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: sticky;
    top: 0;
    z-index: 99;
    .nav-header {
      display: block;
      font-size: px2rem(18);
      text-align: center;
      line-height: px2rem(50);
      color: white;
    }
  }
  .gray-bg {
    background: #f5f5f5;
    padding-bottom: px2rem(10);
    position: sticky;
    top: px2rem(51);
    z-index: 99;
    .city-entry {
      padding-left: px2rem(5);
      font-size: px2rem(15);
      color: #666;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding-top: px2rem(20);
      .city-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70px;
        max-width: 19.2vw;
        margin-left: px2rem(-3);
      }
    }
    .search-input {
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      width: px2rem(305);
      height: px2rem(28);
      font-size: px2rem(13);
      color: #b2b2b2;
      margin-left: px2rem(65);
      margin-top: px2rem(-25);
      border: px2rem(0.5) solid #e6e6e6;
      border-radius: px2rem(5);
      margin-right: px2rem(15);
      background: white;
      text-align: center;
    }
  }
  .nav-wrap.filter-nav-wrap {
    position: sticky;
    top: px2rem(97);
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
}
</style>
