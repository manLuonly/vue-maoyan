<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon"><img src='../../images/back.png'></div>
        </router-link>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped lang="scss">
@import "@/styles/common/px2rem.scss";
.header{
    overflow: hidden;
    height: px2rem(50);
    line-height:px2rem(50);
    text-align: center;
    color:white;
    background: rgb(0,188,212);
    font-size: 14px;
    .back-icon{
        position: absolute;
        left: 0;
        top: 0;
        width: 97%;
        height: px2rem(30);
        font-size: 14px;
        text-align: center;
        color: #fff;
        img{
            margin-left: px2rem(-300);
        }
    }
}
</style>
