export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.getters['auth/getuserjwt']) {
    return redirect('/login')
  }
}
