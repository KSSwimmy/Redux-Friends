import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "../actions";


const initialStateBanana = {
    friends: [],
    isFetching: false,
    err: '',
    isLoggingIn: false
}



const reducers = (stateApple = initialStateBanana, action) => {
    switch (action.type) {

        case FETCHING_FRIENDS: 
            return {
                ...stateApple, 
                isFetching: true 
            } 

        case FETCHING_FRIENDS_SUCCESS:
            return {
                ...stateApple, 
                isFetching: false,

                friends: [
                    ...stateApple.friends, 
                    ...action.payload 
                ]

            }

        case FETCHING_FRIENDS_FAILURE: 
            return {
                ...stateApple, 
                isFetching: false,
                err: action.payload
            
            }

            case LOGIN_START:
            return {
                ...stateApple,
                isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...stateApple,
                isLoggingIn: false
            }
    

        default:
            return stateApple

    }
}

export default reducers;