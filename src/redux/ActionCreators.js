import * as ActionTypes from './ActionTypes'
import { DISHES } from '../shared/dishes'
import { baseUrl } from './baseUrl'

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})


/******************* ACTION CREATORS *********************/

// a thunk returning a function and will call some actions
export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString()
    // posting the new comment to the server
    return fetch(baseUrl + "comments", {
                    method: 'POST',
                    body: JSON.stringify(newComment),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'same-origin'
                })
        // handling promise/error
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
        // error handler
        error => {
            var errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json()) // sending back the newComment back in json format
        .then(response => dispatch(addComment(response))) // pushing newComment to redux store
        .catch(error => {console.log('Post comment ', error.message,
                        alert("Your comment could not be posted\nError: " + error.message))})
}

// a thunk returning a function and will call some actions
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    // setTimeout(() => {
    //     dispatch(addDishes(DISHES))
    // }, 2000)

    return fetch(baseUrl + 'dishes')
        // handling promise/error
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
        // error handler
        error => {
            var errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json()) // converts incoming data to json format
        .then(dishes => dispatch(addDishes(dishes))) // pushes dishes to redux store
        .catch(error => dispatch(dishesFailed(error.message)))

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

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        // handling promise/error
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
        // error handler
        error => {
            var errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json()) // converts incoming data to json format
        .then(comments => dispatch(addComments(comments))) // pushes comments to redux store
        .catch(error => dispatch(commentsFailed(error.message)))     
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true))

    return fetch(baseUrl + 'promotions')
        // handling promise/error
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
        // error handler
        error => {
            var errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json()) // converts incoming data to json format
        .then(promos => dispatch(addPromos(promos))) // pushes promos to redux store
        .catch(error => dispatch(promosFailed(error.message)))
}

// Implies that promos are being loaded from the server
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})