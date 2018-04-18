import { googleProvider, rebase }  from './constants'

export function loginWithGoogle () {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
      saveUser(data.user);
    });
}

export function logout () {
    console.log("attempted to log out");
    return rebase.initializedApp.auth().signOut()
}

export function saveUser (user) {
console.log("save user", user);
return rebase.initializedApp.database().ref().child(`wuusers/${user.uid}/info`)
    .set({
    email: user.email,
    uid: user.uid
    })
    .then(() => {
    
    return user;
    })
}  
