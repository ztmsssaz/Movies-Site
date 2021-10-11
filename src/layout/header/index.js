import { Link } from "react-router-dom";
import Searching from '../../components/searching'
import { useAuthState } from "../../context";
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
                        <li><Link to="/lists" className="dropdown-item">Lists</Link></li>
                        <li><Link to="/favorites" className="dropdown-item">Favorites</Link></li>
                        <li><Link to="/ratings" className="dropdown-item border-bottom">Ratings</Link></li>
                        <li><Link to="/logout" className="dropdown-item">Logout</Link></li>
                    </ul>
                </div>
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
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Series</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">TV SHOWS</Link></li>
                                    <li className="mx-1 text-uppercase"><Link className="p-2" to="/">Categories</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-2 d-flex align-items-center rtl">
                            {handleLoginButton()}
                            <div className="px-4">
                                <Searching />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Style>
    )
}
export default Header;