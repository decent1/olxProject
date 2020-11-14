import firebase from '../../config/firebase'


 const facebookLogin = ()=>{
     return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(user)
            let currentUser ={
                name:user.displayName,
                photoURL:user.photoURL,
                email:user.email,
                uid: user.uid
                }
                firebase.database().ref('/').child(`currentUser/${user.uid}`).set(currentUser)
                .then(()=>{
                    dispatch({type:'SETUSER',payload:currentUser})
            
                            alert('user login succesful')
                           
                        })
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
          });
     }
 }


  
 const set_name =() =>{
    return(dispatch)=>{
       
        dispatch({
            // type: "SETDATA", payload: card
          
        })
    
    
    }}
  


    const getFirebaseData = () => {
        let arr =[]
        return (dispatch) => {   
            firebase.database().ref('/').child(`CardInputData/`).on('child_added', (data) => {
                arr.push(data.val())
            })
            dispatch({ type: 'FirebaseData', payload: arr })
            console.log('action data',arr)
        }
    }
    

export {facebookLogin ,set_name , getFirebaseData } 