<template>
  <div class="bg" :style="{ backgroundImage: `url(${bgImg + '&w=1600&dpr=2'})` }">
    <div class="inner">
      <div class="info">
        <div class="title">
          Sed ut perspiciatis unde omnis
        </div>
        <div class="subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary.</div>
        <div class="desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore.
        </div>
        <div class="email_form">
          <span class="email_form_title">
            Subscribe to our newsletter
          </span>
          <div action="" class="email">
            <label for="email1">Enter your email</label>
            <input type="email" id="email1" v-model="email" required placeholder="Enter your email"
              :class="{ 'success': success,  'error': error }">
            <span v-if="email" class="text_danger">{{ msg }}</span>
            <img src="../assets/img/paper-plane.png" alt="paper img" class="email_icon" @click="validateEmail(email)">
          </div>
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
.inner {
  height: inherit;
  display: flex;
  align-items: center;
}

.bg {
  margin-top: 110px;
  height: 740px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 1;
  text-align: center;

  .title {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.36px;
  }

  .subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: -0.27px;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    margin-bottom: 32px;
    padding-bottom: 32px;
  }

  .desc {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.57;
    letter-spacing: -0.21px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 95px;
  }

  .email_form {
    display: flex;
    flex-direction: column;
    color: #fff;

    .email_form_title {
      margin-bottom: 16px;
      font-family: Exo2;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.24px;
      text-align: center;
    }

    .email {
      position: relative;

      label {
        position: absolute;
        top: -999999px;
        overflow: hidden;
      }

      input {
        backdrop-filter: blur(10px);
        border: solid 1px #fff;
        background-color: rgba(255, 255, 255, 0.1);
        width: 500px;
        height: 50px;
        -webkit-backdrop-filter: blur(10px);
        border-radius: 7px;
        -moz-border-radius: 5px;
        -o-border-radius: 5px;
        outline: none;
        padding: 0 10px;
        color: #fff;

        &.success {
          border-color: #00c300
        }

        &.error {
          border-color: #ff6633
        }

        &::placeholder {
          font-size: 16px;
          color: #fff;
        }
      }

      .text_danger {
        position: absolute;
        left: 10px;
        bottom: -25px;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: -0.24px;
        text-align: left;
        color: #f63;
      }


      .email_icon {
        height: 32px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 10px;
        cursor: pointer;
      }
    }
  }

}</style>