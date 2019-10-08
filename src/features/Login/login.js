import React, { useState } from 'react'
import * as Colors from '../../assets/everCommColors'

const Login = () => {
    const [name, setName] = useState('')
    const [Password, setPassword] = useState('')


    const navigate = () => {
        this.props.history.push("/dashboard");
        // if (this.state.name === 'admin' && this.state.pass === 'admin') {
        //     this.props.history.push("/chart");
        // }
        // else alert("Invalid Account!");
    }

    const changeName = (e) => { setName(e.target.value) }

    const changePass = (e) => { setPassword(e.target.value) }

        return (
            <div className='container-fluid'>
                <img src={process.env.PUBLIC_URL + '/icons/everCommLogo.png'} style={{ height: 35, marginTop: '20px', marginLeft: '10px' }} alt='logo' />
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
                            onChange={changeName} value={name}
                            style={{ height: '60px', background: `${Colors.contanierBg}`, color: 'white', border: `1px solid ${Colors.text2}` }} />

                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text" style={{ color: `${Colors.text2}` }}>Password</label>
                        <input
                            type="password"
                            id="defaultFormLoginPasswordEx"
                            className="form-control mb-4" placeholder="Password"
                            onChange={changePass} value={Password}
                            style={{ height: '60px', background: `${Colors.contanierBg}`, color: 'white', border: `1px solid ${Colors.text2}` }} />
                        <button className='btn form-control text-light' style={{ background: ' linear-gradient(90deg,#144e9e,#1fa9ff)', height: '60px' }} type="submit">Login</button>
                    </form>

                </div>
            </div>


        )
}

export default Login