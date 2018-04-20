import { googleProvider, rebase }  from './constants'


export function logout () {
    console.log("attempted to log out");
    return rebase.initializedApp.auth().signOut()
}


