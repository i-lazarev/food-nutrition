// creating isLogged reducer with switch statement

const initialState = true

const isLoggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Logged':
            return !state
        default:
            return state
    }
}

export default isLoggedReducer