import Cookies from 'js-cookie'

export const state = {
  memberjwt: null
}

export const getters = {
  getmemberjwt (state) {
    if (state.memberjwt) { return 'Bearer ' + state.memberjwt } else { return null }
  }
}

export const mutations = {
  setToken (state, payload) {
    state.memberjwt = payload
    Cookies.set('memberjwt', payload)
  },
  logout (state) {
    state.memberjwt = null
    Cookies.set('memberjwt', null)
  }
}
