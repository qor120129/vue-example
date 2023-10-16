<template>
  <Profile/>
  <Newsletter/>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile'
import Newsletter from '@/components/Newsletter'

export default {
  name: 'HomeView',
  components: {
    Profile,
    Newsletter
  }
}
</script>
