import axios from 'axios'

export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) return
  const locale = params.lang || defaultLocale
  axios.defaults.baseURL = process.env.API_BASE_URL + '/api/' + locale

  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace = '^/' + defaultLocale
    const re = new RegExp(toReplace)
    return redirect(route.fullPath.replace(re, '/'))
  }
}
