<template>
  <div class='navbar'>
    <h1 class="nav-header">猫眼电影</h1>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="scss">
@import '../../styles/common/px2rem.scss';
.navbar{
  position: sticky;
  top: 0;
  width: 100%;
  height: px2rem(50.5);
  background: #e54847;
  border-bottom: 1px solid #e54847;
  .nav-header{
    display: block;
    font-size: px2rem(18);
    text-align: center;
    line-height: px2rem(50);
    color: white;
  }
}

</style>
