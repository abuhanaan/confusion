import * as ActionTypes from './ActionTypes'
import { DISHES } from '../shared/dishes'

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

/******************* ACTION CREATORS *********************/

// a thunk returning a function and will call some actions
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000)
}

// Implies that dishes are being loaded from the server
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})