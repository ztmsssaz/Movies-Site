import { useEffect, useState } from "react";
import { loginUser, useAuthDispatch } from "../../../context";
import { useHistory } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRequest } from '../../../api';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css';

function Login() {

    const [passType, setPassType] = useState('password');
    const [statusMessage, setStatusMessage] = useState('');
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
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleLogin = async (value) => {
        try {
            const response = await loginUser(dispatch, { ...value, 'request_token': requestToken });
            if (!response.success) {
                setStatusMessage(response.status_message);
                setTimeout(() => {
                    setStatusMessage('');
                }, 5000);
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
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                password: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    handleLogin(values);
                    setSubmitting(false);
                }, 400);
            }}
        >
            <div className="container">
                <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-center vh-75">
                    <h1 className="text-center my-4">Login</h1>
                    <Form className="col-12 col-sm-8 col-md-6 col-lg-4" name="login">
                        <div className="text-left">
                            <div className="form-group py-1">
                                <label htmlFor="username">Username</label>
                                <Field className="form-control" name="username" type="text" placeholder="username" autoComplete="username" />
                                <p><small className="text-danger"><ErrorMessage name="username" /></small></p>
                            </div>
                            <div className="form-group py-1">
                                <label htmlFor="password">Password</label>
                                <div className="position-relative">
                                    <Field className="form-control" name="password" type={passType} placeholder="password" autoComplete="password" />
                                    <FontAwesomeIcon className="showPassword" icon={faEye} onClick={handlePasswordType} />
                                    <p><small className="text-danger"><ErrorMessage name="password" /></small></p>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success w-100">Login</button>
                            </div>
                            <p className="text-danger py-2"><small>{statusMessage}</small></p>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>

    );
}

export default Login;
