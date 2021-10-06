import { Link } from "react-router-dom";
import { useAuthState } from "../../context";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";

function Header() {
    const authState = useAuthState();
    function handleLoginButton() {
        if (!authState.sessionId) {
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
                        <div className="col-10 d-flex align-items-center">
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
                        <div className="col-2 d-flex rtl">
                            {handleLoginButton()}
                            <div className="px-4">
                                <Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Style>
    )
}
export default Header;