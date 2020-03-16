export const initialState = {
    username: '',
    password: ''
}

function reducer(state = initialState, action) {
    console.log('Reducers is   ' + action.type)
    switch (action.type) {
        case 'Registration':
            return {
                ...state,
                username: action.data.username,
                password: action.data.password
            }
        default:
            return state
    }
}
export default reducer