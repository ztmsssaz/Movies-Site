import { Fragment, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getRequest } from 'api';
import { MiniSlider, MainSlider } from 'components/sliders';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import get from 'lodash/get';
import Style from "./style";

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    let [topRated, setTopRated] = useState([]);
    let [upComingMovies, setComingMovies] = useState([]);
    let [trendMovies, setPlayingMovies] = useState([]);
    let [searchKeyword, setSearchKeyword] = useState('');
    let isMounted = useRef(false);
    const POPULARMOVIES = get(popularMovies, 'results', []);

    useEffect(() => {
        document.title = "Home";
        isMounted.current = true;
        getRequest('/movie/popular')
            .then(response => {
                setPopularMovies(response.data);
            });

        getRequest('/movie/top_rated')
            .then(response => {
                setTopRated(response.data);
            });

        getRequest('/movie/upcoming')
            .then(response => {
                setComingMovies(response.data);
            });

        getRequest('/trending/movie/day')
            .then(response => {
                setPlayingMovies(response.data);
            });
        return () => { isMounted.current = false };
    }, []);

    function renderFarm() {
        const TOPRATED = get(topRated, 'results', []);
        const COMINGMOVIES = get(upComingMovies, 'results', []);
        const TRENDMOVIES = get(trendMovies, 'results', []);
        return (
            <Fragment>
                <div className="categorySliders px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="py-2 text-capitalize"><b>Top Rated</b></h3>
                        <Link className="px-2 px-sm-3" to={`/forks/top_rated`}><span>See More</span> <FontAwesomeIcon icon={faAngleRight} /></Link>
                    </div>
                    <MiniSlider type={'movie'} data={TOPRATED} />
                </div>
                <div className="categorySliders px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="py-2 text-capitalize"><b>Upcoming</b></h3>
                        <Link className="px-2 px-sm-3" to={`/forks/upcoming`}><span>See More</span> <FontAwesomeIcon icon={faAngleRight} /></Link>
                    </div>
                    <MiniSlider type={'movie'} data={COMINGMOVIES} />
                </div>
                <div className="categorySliders px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="py-2 text-capitalize"><b>trending</b></h3>
                        <Link className="px-2 px-sm-3" to={`/forks/trending`}><span>See More</span> <FontAwesomeIcon icon={faAngleRight} /></Link>
                    </div>
                    <MiniSlider type={'movie'} data={TRENDMOVIES} />
                </div>
            </Fragment>

        )
    }
    return (
        <Style>
            <section className="hero d-flex align-content-center align-items-center">
                <div className="container">
                    <div className="container-holder">
                        <div className="d-flex flex-column text-light">
                            <h2 className="text-capitalize">Welcome</h2>
                            <h3>Millions of movies to discover. Explore now.</h3>
                        </div>
                        <div className="searchForm mx-auto">
                            <form name="search" className="position-relative mt-5">
                                <input type="text" className="form-control py-2 rounded-pill" placeholder="Search for a movie ...."
                                    value={searchKeyword} onChange={el => setSearchKeyword(el.target.value)} />
                                <Link to={`/search?query=${searchKeyword}`}>
                                    <button type="submit" className="btn btn-primary py-2 rounded-pill">
                                        Search
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-5 mainSliders container">
                    <h4 className="px-2 py-2">What's Popular</h4>
                    <MainSlider data={POPULARMOVIES} />
                </div>
            </section>
            <section className="miniSliders">
                <div className="container">
                    {renderFarm()}
                </div>
            </section>
        </Style>
    )
}
export default Home;