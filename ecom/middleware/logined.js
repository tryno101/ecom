export default function ({ store, redirect }) {
  // If the user is authenticated
  if (store.getters['auth/getuserjwt']) {
    return redirect('/users/my-account')
  }
}
