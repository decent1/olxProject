const INITIAL_STATE={
    user:[],
    currentUser:{},
    card:{},
    firebaseData :[]
    
}
export default (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case "SETUSER":
            return({
                    ...state,
               currentUser: action.payload
            })
    }
    switch(action.type){
        case "CARD":
            return({
                    ...state,
                    card: action.payload
            })
    }
    switch (action.type) {
        case "FirebaseData":
            return ({
                ...state,
                firebaseData: action.payload
            })
    }

    return state;
}