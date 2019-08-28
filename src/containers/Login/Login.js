import React from 'react'
import './Login.css'
import {loginToChin} from '../../actions/index'
import {connect} from 'react-redux'
import LoginForm from '../LoginForm/LoginForm'
import LoggedForm from '../LoggedForm/LoggedForm'


function Login({isLogin}) {
    return (
        <div>
            {isLogin?<LoggedForm/>:<LoginForm/>}
        </div>       
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin.isLogin
    }
}


export default connect(mapStateToProps)(Login)