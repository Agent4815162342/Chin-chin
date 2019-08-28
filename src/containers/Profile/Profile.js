import React from 'react'
import {connect} from 'react-redux'
import Nologg from '../../components/Nologg/Nologg'
import UserPage from '../../components/UserPage/UserPage'
import './Profile.css'

function Profile({isLogin}) {
    return (
        <div className='profile'>{isLogin?<UserPage/>:<Nologg/>}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin.isLogin
    }
}


export default connect(mapStateToProps)(Profile)