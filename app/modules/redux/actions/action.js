export const registr = (userName, pass) => {
    return {
        type: 'Registration',
        data: {
            username: userName,
            passowrd: pass
        }
    }
}