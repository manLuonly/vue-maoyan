<template>
    <div class="city">
        <CityHeader></CityHeader>
        <Search :list="cities"></Search>
        <List :hot="hotCity" :letter="letter" :list="cities"></List>
        <Alphabet @chang="handleLetterChang" :list="cities"></Alphabet>
    </div>
</template>

<script>
import axios from 'axios';
import CityHeader from '../city/Header';
import Search from '../city/Search';
import List from '../city/List';
import Alphabet from '../city/Alphabet';
export default {
  data () {
    return {
      cities: {}, // 城市列表
      hotCity: [], // 热门城市
      letter: '' // A-Z
    };
  },
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  },
  methods: {
    getCityInfo () {
      console.log('进来了')
      axios.get('../../../static/api/city.json').then(this.getCityInfoSucc);
    },
    getCityInfoSucc (res) {
      res = res.data;
      console.log(res)
      if (res.ret && res.data) {
        const data = res.data;
        this.hotCity = data.hotCities;
        this.cities = data.cities;
      }
      console.log(this.cities);
    },
    handleLetterChang (letter) {
      console.log(letter)
      this.letter = letter;
    }
  },
  mounted () {
    this.getCityInfo();
  }
};
</script>

<style scoped lang="scss">
.city{
  position: sticky;;
  height: 100%;
  z-index:999;
}
</style>
