<template>
  <div class="inner">
    <h1 class="title">Snap photos and share like never before</h1>
    <div class="profile_group" onload="arrayShuffle()">
      <div class="profile" v-for="item in profile" :key="item">
        <img :src="item.img" :alt="item.img" class="porfile_img">
        <div class="porfile_info">
          <span class="porfile_info_title">
            {{ item.title }}
          </span>
          <p class="porfile_info_desc">
            {{ item.desc }}
          </p>
          <span class="more">
            Learn more
          </span>
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
  created () {
    this.shuffle(this.profile)
  },
  data () {
    return {
      profile: [
        {
          img: require('../assets/img/profile1.jpg'),
          title: 'Sed ut perspiciatis',
          desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
        },
        {
          img: require('../assets/img/profile2.jpg'),
          title: 'Lorem ipsum dolor',
          desc: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
        },
        {
          img: require('../assets/img/profile3.jpg'),
          title: 'Nemo enim ipsam',
          desc: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.'
        }
      ]
    }
  },
  methods: {
    shuffle (item) {
      item.sort(() => Math.random() - 0.5)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 48px;
  width: 600px;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: left;
  margin: 120px 0 70px;
  font-family: 'Exo 2', sans-serif;
}

.profile_group {
  display: flex;
  gap: 20px;

  .profile {
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: left;

    .porfile_img {
      width: 108px;
      height: 108px;
      border-radius: 54px;
    }

    .porfile_info {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .porfile_info_title {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        letter-spacing: -0.36px;
      }

      .porfile_info_desc {
        font-family: 'Montserrat', sans-serif;
        line-height: 1.67;
        letter-spacing: -0.27px;
        color: rgba(0, 0, 0, 0.8);
      }

      .more {
        height: 30px;
        font-weight: bold;
        line-height: 1.67;
        letter-spacing: -0.27px;
        color: #18a0fb;
        cursor: pointer;
      }
    }
  }
}</style>
