import { Fragment, useEffect, useState } from "react";
import { loginUser, useAuthDispatch } from "../../../context";
import { useHistory } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRequest } from '../../../api';

import './style.css'
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passType, setPassType] = useState('password');
    const [requestToken, setRequestToken] = useState('');
    let history = useHistory();
    const dispatch = useAuthDispatch();
    useEffect(() => {
        document.title = "Login";
        getRequest('/authentication/token/new?api_key=4ba2c80bd43f2892ecb3349fa445015f')
            .then(response => {
                if (response) {
                    setRequestToken(response.data.request_token);
                }
            })
    }, [])
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(dispatch, { username, password, 'request_token': requestToken });
            if (!response.success) {
                return;
            }
            history.push('/');
        } catch (error) {
            console.error(error);
        }
    };
    function handlePasswordType() {
        if (passType === 'password') {
            setPassType('text');
        } else {
            setPassType('password')
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-center vh-100">
                    <h1 className="text-center my-4">Login</h1>
                    <form className="col-12 col-sm-8 col-md-6 col-lg-4" name="login">
                        <div className="text-left">
                            <div className="form-group py-1">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" id="username" name="username" type="username" placeholder="username" autoComplete="username"
                                    onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group py-1">
                                <label htmlFor="password">Password</label>
                                <div className="position-relative">
                                    <input className="form-control" id="password" name="password" type={passType} placeholder="password" autoComplete="password"
                                        onChange={e => setPassword(e.target.value)} />
                                    <FontAwesomeIcon className="showPassword" icon={faEye} onClick={handlePasswordType} />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success w-100" onClick={handleLogin}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
