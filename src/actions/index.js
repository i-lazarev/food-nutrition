import { INCREMENT, DECREMENT } from '../constants'

export const Increment = () => {
    return {
        type: INCREMENT
    }
}

export const Decrement = () => {
    return {
        type: DECREMENT
    }
}