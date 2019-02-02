<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或者拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="serach-item border-bottom" v-for="item in listItem" :key="item.id">{{item.name}}</li>
                <li v-show="hasNoData" class="serach-item border-bottom">没有搜索到匹配的数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
  props: {
    list: Object
  },
  data () {
    return {
      keyword: '',
      listItem: [],
      timer: null
    };
  },
  computed: {
    hasNoData () {
      return !this.listItem.length;
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.listItem = '';
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.list) {
          this.list[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.listItem = result;
      }, 100);
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>

<style scoped lang="stylus">
.search {
    height: 1.72rem;
    padding: 0 0.1rem;
    background: white;

    .search-input {
        box-sizing: border-box;
        width: 100%;
        height: 1.3rem;
        line-height: 0.62rem;
        text-align: center;
        border-radius: 0.06rem;
        padding: 0 0.1rem;
        color: #666;
    }
}

.search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;

    .serach-item {
        line-height: 0.62rem;
        padding-left: 0.2rem;
        color: #666;
        background: #fff;
    }
}
</style>
