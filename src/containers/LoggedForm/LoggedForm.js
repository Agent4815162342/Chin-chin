import React from 'react'
import {connect} from 'react-redux'
import './LoggedForm.css'
import { logoutFromChin } from '../../actions';


const Logged = ({logOut}) => {
    return (
        <div>
            <h1>Вы вошли</h1>
            <button onClick={()=>logOut()}>Выйти</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logoutFromChin())
    }
}

export default connect(null, mapDispatchToProps)(Logged)