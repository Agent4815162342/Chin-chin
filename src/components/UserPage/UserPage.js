import React from 'react'
import './UserPage.css'


class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        fetch('./data.json')
        .then(response=>response.json())
        .then(data=>this.setState({user: data.user}))
    }
    render() {
        return (
        <div className='user_page'>
            <div className='avatar'><img src='./chin1.jpg' /></div>
            <div className="user_info">
                <h1>{`${this.state.user.firstname} ${this.state.user.lastname}`}</h1>
                <h4>Страна: {this.state.user.country}</h4>
                <h4>Возраст: {this.state.user.age}</h4>
                <h4>Обо мне: {this.state.user.about}</h4>
            </div>
        </div>
        )
    }
}

export default UserPage