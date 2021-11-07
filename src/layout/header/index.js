import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import Searching from '../../components/searching'
import { useAuthState, logOut, useAuthDispatch } from "../../context";
import Style from "./style";

function Header() {
    const authState = useAuthState();
    const dispatch = useAuthDispatch();

    function closeNavbar() {
        document.getElementById('closeLeftNavbar').click();
    }

    function handleLoginButtonPC() {
        if (!authState.sessionId) {
            return (
                <div>
                    <Link className="auth-btn" to="/login">Login</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link className="profile" to="/profile" type="button" id="dropdownProfile" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="rounded-circle" src="https://secure.gravatar.com/avatar/041ff51dc000a37dd54232e215063ee8.jpg?s=150" alt="profile" />
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownProfile">
                        <li>
                            <Link to="/profile" className="dropdown-item border-bottom">
                                <h6><b>{authState.username}</b></h6>
                                <span>View Profile</span>
                            </Link>
                        </li>
                        <li><Link to="profile/favorites" className="dropdown-item">Favorites</Link></li>
                        <li><Link to="ratings" className="dropdown-item border-bottom">Ratings</Link></li>
                        <li><a href="/" onClick={() => logOut(dispatch)} className="dropdown-item">Logout</a></li>
                    </ul>
                </div>
            )
        }
    }
    function handleLoginButtonMobile() {
        if (!authState.sessionId) {
            return (
                <li className="nav-item">
                    <NavLink exact={true} activeClassName='text-primary' className="p-2" to="/login">Login</NavLink>
                </li>
            )
        } else {
            return (
                <Fragment>
                    <li className="nav-item">
                        <NavLink exact={true} activeClassName='text-primary' className="p-2" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item pt-4">
                        <span className="text-secondary px-2" onClick={() => logOut(dispatch)}>Logout</span>
                    </li>
                </Fragment>
            )
        }
    }
    return (
        <Style>
            <header className="mainHeader py-4 border-bottom">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="col-10 d-flex align-items-center">
                            <div className="logo">
                                <Link to="/"><img src="/logo.svg" alt="logo" /></Link>
                            </div>
                            <nav className="navbar-default">
                                <ul className="d-flex">
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Home</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Movies</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/search">Search</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/categories">Categories</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-2 d-flex align-items-center rtl">
                            {handleLoginButtonPC()}
                            <div className="px-4">
                                <Searching id={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="mobileHeader py-1">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#leftNavbar" aria-controls="leftNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="logo navbar-brand mx-auto">
                            <Link to="/"><img src="/logo.svg" alt="logo" /></Link>
                        </div>
                        <div className="rtl py-1">
                            <div className="px-2">
                                <Searching id={2} />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="leftNavbar" aria-labelledby="navbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="navbarLabel">Menu</h5>
                        <button id="closeLeftNavbar" type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body small">
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={closeNavbar}>
                                <li className="nav-item">
                                    <NavLink exact={true} activeClassName='text-primary' className="p-2" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} activeClassName='text-primary' className="p-2" to="/search">Search</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} activeClassName='text-primary' className="p-2" to="/categories">Categories</NavLink>
                                </li>
                                {handleLoginButtonMobile()}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </Style>
    )
}
export default Header;