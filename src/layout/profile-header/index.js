import { Link } from "react-router-dom";
import { useAuthState } from 'context';
import CircleProgressbar from 'components/circle-gauges';
import Style from "./style";


function ProfileHeader() {
    const avatar = 'https://secure.gravatar.com/avatar/041ff51dc000a37dd54232e215063ee8.jpg?s=150';
    const userInfo = useAuthState()
    return (
        <Style>
            <section className="userArea bg-image">
                <div className="inner_content py-4">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="avatarUser">
                                <img src={avatar} className="rounded-circle" alt="avatar" />
                            </div>
                            <div className="aboutUser px-4 text-white">
                                <h2><b>{userInfo.username}</b></h2>
                                <div className="d-flex">
                                    <div className="d-flex align-items-center me-3">
                                        <CircleProgressbar value={100} width={60} />
                                        <p className="mb-0 ps-2 border-end pe-3">Average Movie Score</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <CircleProgressbar value={58} width={60} />
                                        <p className="mb-0 px-2">Average TV Score</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="d-none">
                <nav className="profileNavbar">
                    <ul className="drop-down d-flex justify-content-center border-bottom">
                        <li className="py-2 px-1">
                            <Link className="btn" to="/profile" >Your Profile</Link>
                        </li>
                        <li className="py-2 px-1"><Link className="btn" to="/" >Favoraites</Link></li>
                        <li className="py-2 px-1">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                                <li><Link to="/" className="dropdown-item">Watchlist</Link></li>
                                <li><Link to="/" className="dropdown-item">Lists</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </section>
        </Style>
    )
}
export default ProfileHeader;