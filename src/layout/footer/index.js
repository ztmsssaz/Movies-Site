import { Link } from "react-router-dom";
import { useAuthState } from '../../context';
import { faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";

function Footer() {
    const userInfo = useAuthState();
    return (
        <Style>
            <footer className="py-4 px-3">
                <div className="container">
                    <div className="d-flex justify-content-around flex-wrap text-center">
                        <div className="col-6 col-sm-3 mt-4">
                            <div className="footerLogo">
                                <img src="/images/icons/footer-logo.svg" alt="footer logo" />
                                <h6 className="text-light py-3">Hi {userInfo.name || userInfo.username} !</h6>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3 mt-4">
                            <h5 className="text-uppercase"><b>THE BASICS</b></h5>
                            <ul className="text-capitalize">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Search</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 mt-4">
                            <h5 className="text-uppercase"><b>THE BASICS</b></h5>
                            <ul className="text-capitalize">
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/about-us">About Us</Link></li>
                                <li><Link to="/categories">Categories</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3 mt-4">
                            <h5 className="text-uppercase"><b>LEGAL</b></h5>
                            <ul className="text-capitalize">
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="mt-4 border-bottom"></div>
                        <ul className="d-flex justify-content-center col-12 flex-wrap pt-4">
                            <li className="col-1"><a href="https://instagram.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li className="col-1"><a href="https://twitter.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon rel="noreferrer follow" icon={faTwitter} /></a></li>
                            <li className="col-1"><a href="https://linkedin.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon rel="noreferrer follow" icon={faLinkedin} /></a></li>
                            <li className="col-1"><a href="https://github.com/ztmsssaz" rel="noreferrer follow" target="_blank"><FontAwesomeIcon rel="noreferrer follow" icon={faGithub} /></a></li>
                        </ul>
                    </div>
                    <div className="copyright text-center my-2 text-white-50">
                        <p>
                            <span> © Copyright 2021 - </span>
                            <a className="mx-auto d-inline-block" href="#mysite" rel="noreferrer follow"> My Movies. </a>
                        </p>
                        <p>
                            <span> Designed and built by </span>
                            <a className="mx-auto d-inline-block" href="https://iamabolfazl.ir" rel="noreferrer follow" target="_blank"> Abolfazl </a>
                            <span> ,data provided by </span>
                            <a className="mx-auto d-inline-block" href="https://www.themoviedb.org" rel="noreferrer follow" target="_blank"> TMDb </a>
                        </p>
                    </div>
                </div>
            </footer>
        </Style >
    )
}
export default Footer;