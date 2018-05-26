import {auth} from './Firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);

//Handling errors
export const handleError = (error) => {
    switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Usuário ou senha incorretos'
        default:
            console.log(error)
            return 'Algo de errado não está certo'
    }
}