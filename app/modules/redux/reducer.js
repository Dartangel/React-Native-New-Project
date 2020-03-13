export const initialState = {
    username: 'qwe',
    password: 'qwert'
}

const reducer = (state = initialState, action) => {
    console.log(action, 'asdasdasdasds')
    switch (action.type) {
        case 'Registration':
            password = action.password
            return ({ ...state, rpassword: JSON.stringify(password) })
        default:
            return state;
    }
}
export default reducer