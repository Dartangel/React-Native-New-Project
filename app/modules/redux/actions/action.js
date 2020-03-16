export const registr = (userName, pass) => {
    return {
        type: 'Registration',
        data: {
            username: userName,
            password: pass
        }
    }
}