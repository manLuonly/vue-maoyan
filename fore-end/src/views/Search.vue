<template>
<div class="search">
  <Hader></Hader>
  <router-view></router-view>
  <div class="cinemas-search-input">
  <input type="text" placeholder="搜影院" class="search-input" v-model="input">
  <router-link :to='{name:"cinemas"}' tag="div" class="cancel-btn">取消</router-link>

  <div class="cinema-list-wrap">
  <div class="cinema-list" v-for="(item, index) in films" :key="index">
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
  </div>

</div>
</template>

<script>
import axios from 'axios';
import Hader from '../components/Hader';
export default {
  name: 'Search',
  data () {
    return {
      input: '', // 绑定input输入的值
      films: [] // 获取到的数据
    };
  },
  components: {
    Hader
  },
  methods: {
    getCity (newVal) {
      axios
        .get('/api/city/citylist', {
          params: {
            val: newVal
          }
        })
        .then(response => {
          console.log(response);
          if (response.data.code === 0) {
            this.films.push(...response.data.data[1]);
          } else {
            console.log('没有你想要的信息');
          }
        });
    }
  },
  // 监听input的实时变化
  watch: {
    input (newVal, oldVal) {
      // newVal为新值,oldVal为久值
      if (newVal) {
        // console.log('发生变化了')
        console.log(newVal);
        this.getCity(newVal);
      } else {
        this.getCity(oldVal);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/common/px2rem.scss";
.search {
  .cinemas-search-input {
    z-index: 99;
    height: px2rem(49);
    width: 100vw;
    padding: px2rem(9.5) px2rem(15);
    background-color: #fff;
    position: fixed;
    .search-input {
      width: px2rem(302);
      height: px2rem(25);
      background: #f4f4f4;
      border-radius: px2rem(3);
    }
    .cancel-btn {
      width: px2rem(43);
      position: absolute;
      display: inline-block;
      text-align: right;
      font-size: px2rem(14);
      line-height: px2rem(30);
    }
  }
  .cinema-list-wrap {
    overflow-y: auto;
    height: px2rem(10000);
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
}
</style>
