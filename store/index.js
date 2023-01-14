export const state = () => ({
  allCountries: [],
  country: {}
})

export const mutations = {
  setCountries (state, payload) {
    state.allCountries = payload
  },
  setCountry (state, payload) {
    state.country = payload
  },
  setCountriesByRegion (state, payload) {
    state.allCountries = payload
  }
}

export const actions = {
  async nuxtServerInit (vuexContext, context) {
    return await context.app.$axios
      .$get('/all')
      .then((data) => {
        vuexContext.commit('setCountries', data)
      })
      .catch(e => context.error(e))
  },
  async getCountries (vuexContext, context) {
    return await context.app.$axios
      .$get('/all')
      .then((data) => {
        vuexContext.commit('setCountries', data)
      })
      .catch(e => context.error(e))
  },
  getSearch (vuexContext, context) {
    vuexContext.commit('setCountries', context)
  },
  async getCountry ({ commit }, code) {
    await this.$axios
      .$get(`alpha/${code}`)
      .then((data) => {
        commit('setCountry', data)
        this.$router.push('/details/' + code)
      })
  },
  async getCountriesByRegion ({ commit }, region) {
    await this.$axios
      .$get(`region/${region}`)
      .then((data) => {
        commit('setCountriesByRegion', data)
      })
  }

}
