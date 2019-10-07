import React ,{useState } from 'react'
import {withRouter} from 'react-router-dom'
import * as RoutePath from '../../network/routePath'

const Login = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const navigate = () => {
        if (name === 'admin' && password === 'admin') {
            props.history.push(RoutePath.Dashboard);
        }
        else alert("Invalid Account!");
    }

    const changeName = (e) => {
        setName({ name: e.target.value });
    }

    const changePass = (e) => {
        setPassword({ password: e.target.value });
    }

        return (
            <div className="maindiv">
                <div className="login-form">
                    <form onSubmit={navigate} className="mt-60">
                        <label style={{ 'marginLeft': '-105px' }} htmlFor="name">Username</label><br />
                        <input onChange={changeName} style={{ 'marginBottom': '10px' }} id="name"></input><br />
                        <label style={{ 'marginLeft': '-105px' }} htmlFor="pass">Password</label><br />
                        <input onChange={changePass} id="pass"></input><br />
                        <button className="mt-40 login-btn" onChange={changePass} type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    
}

export default withRouter(Login)
