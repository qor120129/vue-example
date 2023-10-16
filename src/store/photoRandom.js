import axios from 'axios'

const photoRandom = {
  namespaced: true,
  state: () => ({
    imgs:'',
  }),

  mutations: {
    setPhoto(state, payload) {
      state.imgs = payload
      console.log('payload', payload)
  },
  },
  actions: {
    async getPhoto({ commit }) {
      let response = null
      let img = null
      try {
        if(localStorage.getItem('imgs') === null) {
          response = await axios.get ("https://api.unsplash.com/photos/random/?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM")
          img = response.data.urls.raw
          localStorage.setItem("imgs", img)
          commit("setPhoto", img)
        }else{
          commit("setPhoto", localStorage.getItem('imgs'))
        }
      }
      catch (e) {
          console.error(e)
      }
  },
  },
}
export default photoRandom