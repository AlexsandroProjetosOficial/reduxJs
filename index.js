/**
 * Import redux ande create store
 */

const redux = require('redux');
const createStore = redux.createStore;

/**
 * Actions and Actions Types.
 */
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

/**
 * Actions
 */
const changeUser = (user) => {
    return {
        type: CHANGE_USER,
        info: 'Change the current user',
        payload: user
    }
}

const logout = () => {
    return {
        type: LOGOUT,
        info: 'Logou the current user'
    }
}

/**
 * Value Initial
 */

const initialState = {
    user: '',
    isLogged: false
}

/**
 * Reducers
 */

const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER:
            return {
                ...prevState,
                user: action.payload,
                isLogged: true
            }
        case LOGOUT:
            return {
                ...prevState,
                user: '',
                isLogged: false
            }
        default:
            return prevState
    }
}

/**
 * Store
 */

const store = createStore(userReducer);

console.log('initial state', store.getState());

store.dispatch(changeUser('alex'));

console.log('new state', store.getState());

store.dispatch(logout());

console.log('new state', store.getState());
