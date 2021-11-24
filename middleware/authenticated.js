export default ({ store, route, redirect }) => {
  if (
    !store.getters.isAuthenticated &&
    route.name !== 'login' &&
    route.name !== 'register'
  ) {
    redirect('/')
  }
  if (
    store.getters.isAuthenticated &&
    (route.name === 'login' || route.name === 'register')
  ) {
    redirect('/')
  }
}
