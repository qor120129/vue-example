<template>
  <div class="inner">
    <div class="porfiles">
      <h1>Snap photos and share like never before</h1>
      <div class="porfile" onload="arrayShuffle()">
        <div v-for="item in profile" :key="item">
          <img :src="item.img" :alt="item.img" class="porfile_img">
          <div class="title"> {{ item.title }}</div>
          <div class="sub">{{ item.sub }}</div>
          <div class="more">Learn more</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String
  },
  created() {
    this.shuffle(this.profile)
  },
  data() {
    return {
      profile: [
        {
          img: require('../assets/img/profile1.jpg'),
          title: 'Sed ut perspiciatis',
          sub: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
        },
        {
          img: require('../assets/img/profile2.jpg'),
          title: 'Lorem ipsum dolor',
          sub: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
        },
        {
          img: require('../assets/img/profile3.jpg'),
          title: 'Nemo enim ipsam',
          sub: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.'
        }
      ]
    }
  },
  methods: {
    shuffle(item) {
      item.sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<style lang="scss" scoped></style>
