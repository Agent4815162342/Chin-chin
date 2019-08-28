export function loginToChin(login, password) {
    if (login==='test_user'&&password==='1234') {
        return {
            type: 'LOGIN'
        }
    }
}

export function logoutFromChin() {
    return {
        type: 'LOGOUT'
    }
}