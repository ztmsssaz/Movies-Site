// import { Link } from "react-router-dom";
import Style from "./style";
function Categories() {
    document.title = "About US";
    return (
        <Style>
            <div className="gradiant">
                <div className="inner_content">
                    <div className="content text-center text-white py-4">
                        <h2 className="fs-large fs-lg">Hi there</h2>
                        <img className="deadpool w-50 mx-auto" src="/images/background/deadpool.png" alt="deadpool" />
                        <h2>Let's talk about TMDB</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-8 mx-auto">
                                    <p>
                                        The Movie Database (TMDB) is a community built movie and TV database.
                                        Every piece of data has been added by our amazing community dating back to 2008.
                                        TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of.
                                        Put simply, we live and breathe community and that's precisely what makes us different.
                                    </p>
                                    <h2>The TMDB Advantage</h2>
                                    <div className="wrapper text-start">
                                        <div>
                                            <h2>1</h2>
                                            <p>Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.</p>
                                        </div>
                                        <div>
                                            <h2>2</h2>
                                            <p>
                                                Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on TMDB is nothing short of amazing.
                                            </p>
                                        </div>
                                        <div>
                                            <h2>3</h2>
                                            <p>We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.</p>
                                        </div>
                                        <div>
                                            <h2>4</h2>
                                            <p>Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.</p>                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}
export default Categories;