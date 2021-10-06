import { Link } from "react-router-dom";
import { isloggedIn } from "../../helpers/isLoggedIn";
import Style from "./style";

function Header() {
    const userInfo = isloggedIn();
    function handleLoginButton() {
        if (!userInfo) {
            return (
                <div>
                    <Link className="auth-btn" to="/login">Login</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link className="auth-btn" to="/user-profile">Profile</Link>
                </div>
            )
        }
    }
    return (
        <Style>
            <header className="mainHeader">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="col-8 d-flex align-items-center">
                            <div className="logo">
                                <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                            </div>
                            <nav className="navbar-default">
                                <ul className="d-flex">
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Home</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Movies</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Series</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">TV SHOWS</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Categories</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-4 rtl">
                            {handleLoginButton()}
                        </div>
                    </div>
                </div>
            </header>
        </Style>
    )
}
export default Header;