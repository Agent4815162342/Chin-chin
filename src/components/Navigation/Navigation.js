import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import {connect} from 'react-redux'

function Navigation({isLogin}) {
    return (
        <aside>
            <nav>
                <ul>
                    <li><NavLink exact activeClassName='activelink' to='/'>Главная</NavLink></li>
                    <li><NavLink activeClassName='activelink' to='/profile'>Моя страница</NavLink></li>
                    <li><NavLink activeClassName='activelink' to='/news'>Новости</NavLink></li>
                    <li><NavLink activeClassName='activelink' to='/login'>
                        {isLogin?'Выйти':'Войти'}</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin.isLogin
    }
}

export default connect(mapStateToProps)(Navigation)