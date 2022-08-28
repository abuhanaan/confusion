import { DISHES } from '../shared/dishes'

export const Dishes = (state = DISHES, action) => {
    switch(action.type) {
        default: // return the state unmodified
            return state
    }
}