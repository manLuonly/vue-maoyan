<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        1
      </div>
      <div class="swiper-slide">
        2
      </div>
      <div class="swiper-slide">
        3
      </div>
      <div class="swiper-slide">
        4
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss">
@import '../../styles/common/px2rem.scss';
@import './index.scss';
</style>
