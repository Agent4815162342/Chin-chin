export default function isLogin (state = {isLogin: false}, action) {
    switch (action.type) {
        case 'LOGIN': 
            return {
                isLogin: true
            }
        case 'LOGOUT': 
            return {
                isLogin: false
            }
        default:
            return state;
    }
}