// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from '../../api';
import { posterBaseUrl, backgroundMovieBaseUrl } from "../../constance";
import CircleProgressbar from '../../components/circle-gauges';
import Style from "./style";

function SeeMovie() {
    const { id } = useParams();
    const [movieInfo, setMovieData] = useState({});
    useEffect(() => {
        getRequest(`/movie/${id}`)
            .then(response => {
                setMovieData(response.data);
                console.log(response.data);
            })
    }, []);
    function errrr(el) {
        el.target.src = "/images/unkown-poster.jpg";
        console.log(el.target.src);
    }
    function renderFarm() {
        if (movieInfo.poster_path) {
            return (
                <div className="backgroundMovie" style={{ backgroundImage: `url(${backgroundMovieBaseUrl}${movieInfo.backdrop_path})` }}>
                    <div className="backgroundDrop">
                        <div className="container">
                            <div className="d-flex justify-content-around flex-wrap flex-md-nowrap py-4 px-1 py-sm-4">
                                <div className="col-9 col-md-2">
                                    <img className="img rounded-3" src={`${posterBaseUrl}${movieInfo.poster_path}`} onError={errrr} alt="ok" />
                                </div>
                                <div className="infoBox text-white justify-content-start ps-sm-1 ps-md-5">
                                    <div>
                                        <h2 className="mt-3 mt-sm-0">{movieInfo.title} <small className="text-light font-weight-normal">({movieInfo.release_date.split('-')[0]})</small></h2>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center pb-2">
                                            {
                                                movieInfo.genres.map(item => {
                                                    return (
                                                        <Link key={`${movieInfo.id, item.id}`} className="btn-light rounded-pill mx-1 px-2" to={`categories/${item.id}`}> <small>{item.name}</small> </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="py-2 d-flex align-items-center">
                                        <CircleProgressbar width={50} value={40} />
                                        <b className="px-2">User <br /> Score</b>
                                    </div>
                                    <p className="my-1 py-2">
                                        {movieInfo.tagline}
                                    </p>
                                    <div >
                                        <h2 className="my-1">Overview</h2>
                                        <p className="my-1">{movieInfo.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }

    }

    return (
        <Style>
            <section className="movieDetails pt-5" >
                <div className="py-5">
                    {renderFarm()}
                </div>
            </section>
        </Style>
    )
}
export default SeeMovie;