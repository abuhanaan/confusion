import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createForms } from 'react-redux-form' // with this one does not need to explicitly
// write reducers and action to store form data into react store
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { InitialFeedback } from './forms'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    )
    return store
} 
