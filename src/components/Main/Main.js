import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home/Home.js'
import Login from '../../containers/Login/Login'
import Profile from '../../containers/Profile/Profile'
import News from '../News/News.js'
import './Main.css'

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/news' component={News}/>
            </Switch>
        </main>
    )
}

export default Main