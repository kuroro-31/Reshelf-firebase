export default function ({ store, redirect }) {
  if (!store.state.authenticate.authenticated) {
    return redirect('/auth/login')
  }
}
