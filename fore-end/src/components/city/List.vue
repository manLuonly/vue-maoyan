<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ curCity }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
                v-for="(item,key) in list"
                :ref="key"
                :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li class="item border-bottom"
                         v-for="listInner in item"
                          :key="listInner.id"
                    >{{listInner.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  props: {
    hot: Array,
    list: Object,
    letter: String
  },
  data () {
    return {
      // 当前城市
      curCity: ''
    };
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    getCityName () {
      /* eslint-disable */
      let myCity = new BMap.LocalCity();
      myCity.get((result) => {
        this.curCity = result.name;
      })
    }
  },
  created () {
    this.getCityName();
  }
};
</script>

<style scoped lang="stylus">
.border-topbottom {
    &:before {
        background: #ccc;
    }

    &:after {
        background: #ccc;
    }
}

.border-bottom {
    &:before {
        background: #ccc;
    }
}

.list {
    overflow: hidden;
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
        line-height: 0.54rem;
        background: #eee;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.56rem;
    }

    .button-list {
        overflow: hidden;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;

        .button-wrapper {
            float: left;
            width: 33.33%;

            .button {
                margin: 0.1rem;
                padding: 0.1rem 0;
                text-align: center;
                border: 0.02rem solid #ccc;
                border-radius: 0.06rem;
            }
        }
    }

    .item-list {
        .item {
            line-height: 1.5rem;
            color: #212121;
            padding-left: 0.2rem;
            font-size: 0.68rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-bottom 1px solid #ccc;
        }
    }
}
</style>
