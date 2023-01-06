import { Alert } from 'react-native'
import firebase from './firebase'

registerUser = (email, password, confirmPassword,first_name,last_name) => {
    if(password == confirmPassword){
        firebase.auth().createUserwithEmailAndPassword(email, password).then((userCredential) =>{
            Alert.alert("User registered!!");

        })
        .catch(error => {
            Alert.alert(error.message);
        
        });
        
    }
    else{
        Alert.alert("Passwords don't match!");

        
    }




}