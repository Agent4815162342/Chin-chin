import React, {useState} from 'react'
import './LoginForm.css'
import {connect} from 'react-redux'
import { loginToChin } from '../../actions';

const LoginForm = ({login}) => {
    const [loginValue, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>Добро пожаловать в Chin Chin</h1>
            <form className='login' onSubmit={(e)=>{
                e.preventDefault();
                login(loginValue, password);
            }}>
                <p>
                    <label htmlFor='login'>Логин: </label>
                    <input id='login' type='text' onChange={(e)=>{setLogin(e.target.value)}}/>
                </p>
                <p>
                    <label htmlFor='password'>Пароль: </label>
                    <input id='password' type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </p>
                <button type='submit'>Войти</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: (loginValue, password) => dispatch(loginToChin(loginValue, password))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm)