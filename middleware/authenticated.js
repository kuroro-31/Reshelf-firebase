export default ({ store, route, redirect }) => {
  if (
    !store.getters.isAuthenticated &&
    route.name !== 'login' &&
    route.name !== 'register'
  ) {
    redirect('/auth/login')
  }
  if (
    store.getters.isAuthenticated &&
    (route.name === 'login' || route.name === 'register')
  ) {
    redirect('/')
  }
}
