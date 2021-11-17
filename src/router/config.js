import { Route, Redirect } from 'react-router-dom';
import { isloggedIn } from 'helpers';

export function PublicRoute({ children, isLogin, restricted, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isLogin && restricted ? (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: location }
                            }}
                        />
                    ) : (
                        children
                    )
                )
            }
        />
    );
};

export function PrivateRoute({ children, isLogin, ...rest }) {
    isLogin = isloggedIn();
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    isLogin ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    )
                )
            }
        />
    );
};