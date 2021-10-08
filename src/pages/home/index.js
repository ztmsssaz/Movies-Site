import { MiniSlider, MainSlider } from '../../components/sliders';
import { Link } from 'react-router-dom';
import { getRequest } from '../../api';
import { Fragment, useEffect, useState } from 'react';
import get from 'lodash/get';
import Style from "./style";

function Home() {
    const [data, setMovies] = useState([]);
    let [topRated, setTopRated] = useState([]);
    let [nowPlayingMovies, setPlayingMovies] = useState([]);
    let [upComingMovies, setComingMovies] = useState([]);

    const results = get(data, 'results', []);
    const PLAYINGMOVIES = get(nowPlayingMovies, 'results', []);
    const COMINGMOVIES = get(upComingMovies, 'results', []);
    const TOPRATED = get(nowPlayingMovies, 'results', []);
    useEffect(() => {
        getRequest('/movie/popular')
            .then(response => {
                setMovies(response.data);
            });
        callSlidersApi();
    }, [])
    async function callSlidersApi() {
        try {
            [
                topRated,
                nowPlayingMovies,
                upComingMovies,
            ] = await Promise.all([
                (topRated = getRequest('/movie/top_rated')),
                (nowPlayingMovies = getRequest('/movie/now_playing')),
                (upComingMovies = getRequest('/movie/upcoming')),
            ])
        } catch (err) {
            console.log(err);
        } finally {
            setTopRated(topRated.data);
            setPlayingMovies(nowPlayingMovies.data);
            setComingMovies(upComingMovies.data);
        }
    }
    function renderFarm() {
        return (
            <Fragment>
                <div className="categorySliders px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="py-2 text-capitalize"><b>Top Rated</b></h3>
                        <Link className="px-5" to={`/categories/${1}`}>See More</Link>
                    </div>
                    <MiniSlider data={TOPRATED} />
                </div>
                <div className="categorySliders px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="py-2 text-capitalize"><b>Upcoming</b></h3>
                        <Link className="px-5" to={`/categories/${1}`}>See More</Link>
                    </div>
                    <MiniSlider data={COMINGMOVIES} />
                </div>
                <div className="categorySliders px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="py-2 text-capitalize"><b>Now playing</b></h3>
                        <Link className="px-5" to={`/categories/${1}`}>See More</Link>
                    </div>
                    <MiniSlider data={PLAYINGMOVIES} />
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
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className="searchForm mx-auto">
                            <form name="search" className="position-relative mt-5">
                                <input type="text" className="form-control py-2 rounded-pill" placeholder="Search for a movie, tv show, person......" />
                                <button className="btn btn-primary py-2 rounded-pill">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-5 mainSliders container">
                    <h4 className="px-2 py-2">What's Popular</h4>
                    <MainSlider data={results} />
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