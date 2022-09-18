import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    // eslint-disable-next-line no-unused-vars
    const token = null
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        // eslint-disable-next-line eqeqeq
        if (parsed.memberjwt == 'null') {
          commit('auth/setToken', null)
        } else {
          commit('auth/setToken', parsed.memberjwt)
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }
  }
}
