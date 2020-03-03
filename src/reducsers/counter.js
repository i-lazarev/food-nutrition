// we import the constants to use them in switch statement
import { INCREMENT, DECREMENT } from '../constants'


// creating counter reducer with switch statement
const initialState = 0
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default counterReducer