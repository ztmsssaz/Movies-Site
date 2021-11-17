import { Link } from "react-router-dom";
import { useAuthState, logOut, useAuthDispatch } from 'context';
import { useEffect, useRef, useState } from "react";
import { getRequest } from "api";
import CircleProgressbar from 'components/circle-gauges';
import Style from "./style";
import { profileBaseUrl, gravatarBaseUrl } from 'constant'

function UserProfile() {
    const satateInfo = useAuthState();
    const dispatch = useAuthDispatch();
    const [profileInfo, setProfileInfo] = useState({});

    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        getRequest('/account', { session_id: satateInfo.sessionId })
            .then(res => {
                if (res.status === 200) {
                    setProfileInfo(res.data);
                }
            })
        return () => mounted.current = false;
    }, [satateInfo]);

    function renderprofileImage() {
        if (profileInfo.avatar.tmdb.avatar_path) {
            return (
                <img src={`${profileBaseUrl}${profileInfo.avatar.tmdb.avatar_path}`} className="rounded-circle" alt="avatar" />
            )
        } else {
            return (
                <img src={`${gravatarBaseUrl}/${profileInfo.avatar.gravatar.hash}.jpg`} className="rounded-circle" alt="avatar" />
            )
        }

    }
    return (
        <Style>
            <section className="userArea py-2 bg-image">
                <div className="inner_content mt-3">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div className="avatarUser">{profileInfo.avatar &&
                                renderprofileImage()}
                            </div>
                            <div className="aboutUser px-4 text-white">
                                <h2 className="text-center text-md-start"><b>{profileInfo.name || satateInfo.username}</b></h2>
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
                        <div className="form">
                            <form className="d-flex flex-wrap text-light">
                                <div className="col-10 col-sm-4 m-3">
                                    <label htmlFor="name" class="form-label">Name</label>
                                    <input id="name" className="form-control" value="Abolfazl Zarei" placeholder="Name" readOnly />
                                </div>
                                <div className="col-10 col-sm-4 m-3">
                                    <label htmlFor="email" class="form-label">Email</label>
                                    <input id="email" className="form-control" value="zarei.mrabolfazl@gmail.com" placeholder="Email" readOnly />
                                </div>
                                <div className="col-10 col-sm-4 m-3">
                                    <label htmlFor="nationalCode" class="form-label">National Code</label>
                                    <input id="nationalCode" className="form-control" value="0640536433" placeholder="National Code" readOnly />
                                </div>
                            </form>
                            <button className="auth-btn border-0 m-3" onClick={() => logOut(dispatch)}>Logout</button>
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
export default UserProfile;