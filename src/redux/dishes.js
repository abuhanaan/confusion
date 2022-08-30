import * as ActionTypes from './ActionTypes'

export const Dishes = (state = {
            isLoading: true, // true cos dishes array is initially empty, will be set to false after ADD_DISHES has bn called 
            errMess: null, // null and will eventually be set to error messages received from the server
            dishes: []
        }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}
            
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []}

        default: // return the state unmodified
            return state
    }
}