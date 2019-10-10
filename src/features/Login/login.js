import React, { useState } from 'react'
import * as Colors from '../../assets/everCommColors'
import {EverCommButton} from '../../elements/evercomButton'
import * as RoutePath from '../../network/routePath'
import EverCommLogo from '../../assets/icons/everCommLogo.png'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [visible,setVisible]=useState(false)
    const userEmail = "admin@gmail.com"
    const userPassword = "admin@1234"

    
    const navigate = (e) => {
        e.preventDefault()
        if (email === userEmail && Password === userPassword) { props.history.replace(`/${RoutePath.Plant}`) }

    }
    const View=()=>{setVisible(!visible)}

    const changeEmail = (e) => { setEmail(e.target.value) }

    const changePass = (e) => { setPassword(e.target.value) }

    return (
        <div style={{height:'100vh'}}>
            <img src={EverCommLogo} style={{ height: 35, marginTop: '20px', marginLeft: '10px' }} alt='logo' />
            <div className='col-lg-4 col-md-6 text-light mx-auto'>
                <div style={{ color: `${Colors.text1}`, textAlign: 'center', padding: '60px' }}>
                    <i className="fa fa-lock fa-3x py-4"></i>
                    <div style={{ fontSize: "20px", fontWeight: 'bold' }}>Login To Your Account</div>
                </div>

                <form onSubmit={navigate}>
                    <label htmlFor="defaultFormLoginEmailEx" style={{ color: `${Colors.text2}` }}>Email Address</label>
                    <input
                        type="email"
                        id="defaultFormLoginEmailEx"
                        className="form-control mb-4" placeholder="Email"
                        onChange={changeEmail} value={email}
                        style={{ height: '60px', background: `${Colors.contanierBg}`, color: 'white', border: `1px solid ${Colors.text2}` }} />

                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text" style={{ color: `${Colors.text2}` }}>Password</label>
                    <input
                        type={visible?"text":"password"}
                        id="defaultFormLoginPasswordEx"
                        className="form-control mb-4" placeholder="Password"
                        onChange={changePass} value={Password}
                        style={{ height: '60px', background: `${Colors.contanierBg}`, color: 'white', border: `1px solid ${Colors.text2}` }} />
                    <span style={{ float: 'right', position: 'relative', marginTop: "-86px", fontSize: '18px', color: `${Colors.text2}`,marginRight:'20px',cursor:'pointer'}}onClick={View}>
                        {visible?<i className="fa fa-eye-slash py-4"/>:<i className="fa fa-eye py-4"/>}
                        </span>
                    <EverCommButton type='submit' text={'Login'} />
                </form>
            </div>
        </div>


    )
}

export default Login


