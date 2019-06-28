import axios from 'axios'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});
   return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
            getFriends();
        })
}

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS})

    axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data})
    })
    .catch(error => {
        dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error})
    })
}