import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from "../actions";


const initialStateBanana = {
    friends: [],
    isFetching: false,
    err: ''
}



const reducers = (stateApple = initialStateBanana, action) => {
    switch (action.type) {

        case FETCHING_FRIENDS: 
            return {...stateApple, isFetching: true } 

        case FETCHING_FRIENDS_SUCCESS:
            return {
                ...stateApple, 
                isFetching: false,
                friends: [...stateApple.friends, ...action.payload ]

            }

        case FETCHING_FRIENDS_FAILURE: 
            return {
                ...stateApple, 
                isFetching: false,
                err: action.payload
            
            }
    

        default:
            return stateApple

    }
}

export default reducers;