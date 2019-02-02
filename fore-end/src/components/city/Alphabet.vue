<template>
    <div class="list">
        <li class="item"
            :ref="item"
             @click="handeClick"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend= "handleTouchEnd"
             v-for="item of letter"
             :key="item">{{item}}</li>
    </div>
</template>

<script>
export default {
  props: {
    list: Object
  },
  data () {
    return {
      touchstart: false,
      startY: 0,
      timer: null
    };
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  computed: {
    letter () {
      const letter = [];
      for (let i in this.list) {
        letter.push(i);
      }
      return letter;
    }
  },
  methods: {
    handeClick (e) {
      this.$emit('chang', e.target.innerText);
    },
    handleTouchStart () {
      // 手指放上
      this.touchstart = true;
    },
    handleTouchMove (e) {
      // 手指移动
      if (this.touchstart) {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letter.length) {
            this.$emit('chang', this.letter[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd () {
      // 手指离开
      this.touchstart = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 7.58rem;
    right: 0.5rem;
    bottom: 0rem;
    width: 0.4rem;

    .item {
        line-height: 0.77rem;
        text-align: center;
        color: blue;
        list-style: none;
    }
}
</style>
