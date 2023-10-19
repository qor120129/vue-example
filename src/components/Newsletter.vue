<template>
  <div class="bg" :style="{ backgroundImage: `url(${bgImg + '&w=1600&dpr=2'})`}">
    <div class="inner">
      <div class="newsLetter">
        <div class="title">
          Sed ut perspiciatis unde omnis
        </div>
        <div class="sub">There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary.</div>
        <div class="desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore.
        </div>
        <div class="email_title">
          Subscribe to our newsletter
        </div>
        <div class="email_form">
          <label for="email">Enter your email</label>
          <input type="email" id="email" v-model="email" required placeholder="Enter your email"
            :class="{ 'success': success,  'error': error }">
          <span v-if="email" class="text_danger">{{ msg }}</span>
          <img src="../assets/img/paper-plane.png" alt="paper img" class="email_icon" @click="validateEmail(email)">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Newsletter',
  computed: {
    bgImg() {
      return this.$store.state.photoRandom.imgs;
    }
  },
  mounted() {
    this.$store.dispatch('photoRandom/getPhoto');
  },
  data() {
    return {
      email: '',
      msg: '',
      success: false,
      error: false
    };
  },
  watch: {
    email(value) {
      this.validateEmail(value);
    }
  },
  methods: {
    validateEmail(value) {
      //eslint-disable-next-line

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg = '';
          this.success = true
          this.error = false
          
        }
        else{
          this.msg = 'Please enter a valid email!';
          this.error = true
          this.success = false
      }
      if(value === '') {
        this.error = false
        this.success = false
      }

    },

  },
}
</script>

<style lang="scss" scoped>
</style>