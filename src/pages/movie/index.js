// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { getRequest } from '../../api';
import { posterBaseUrl, backgroundMovieBaseUrl, galleryMovieBaseUrl } from "../../constance";
import { toHours, defaultImage } from '../../helpers';
import { faHeart, faBookmark, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleProgressbar from '../../components/circle-gauges';
import Rating from '../../components/rating';
import MiniSlider from '../../components/sliders/miniSlider';
import YoutubeEmbed from '../../components/youtube-embed';
// import get from 'lodash/get';
import Style from "./style";

function SeeMovie() {
    const { id } = useParams();
    const [movieInfo, setMovieData] = useState({});
    const [keyTrailer, setKeyTrailer] = useState({ results: [{ key: '' }] });
    const [similarMovies, setSimilarMovies] = useState({ results: [] });
    const [movieImages, setMovieImages] = useState({ backdrops: [] });
    const [modalImage, setModalImage] = useState('');
    const [location, setLocation] = useState('');
    const [marked, setMarked] = useState(false);
    const history = useHistory();
    history.listen((location) => {
        setLocation(location);
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        getRequest(`/movie/${id}`)
            .then(response => {
                setMovieData(response.data);
            })
        getRequest(`/movie/${id}/videos`)
            .then(response => {
                console.log(response.data);
                setKeyTrailer(response.data);
            })
        getRequest(`/movie/${id}/similar`)
            .then(response => {
                setSimilarMovies(response.data);
            })
        getRequest(`/movie/${id}/images`)
            .then(response => {
                setMovieImages(response.data);
            })
    }, [location]);

    function AddToFavoritesList() {
        // getRequest(`/${mediaType}/${id}/similar`)
        //     .then(response => {
        //         setSimilarMovies(response.data);
        //     })
    }
    function addToWatchList() {

    }
    function renderFarm() {
        if (movieInfo.original_title) {
            return (
                <div className="backgroundMovie" style={{ backgroundImage: movieInfo.backdrop_path ? `url(${backgroundMovieBaseUrl}${movieInfo.backdrop_path})` : 'none' }}>
                    <div className="backgroundDrop py-md-5">
                        <div className="container">
                            <div className="d-flex justify-content-start flex-wrap flex-md-nowrap py-4 px-1 py-sm-4">
                                <div className="col-9 col-md-2">
                                    {<img className="img rounded-3" src={`${posterBaseUrl}${movieInfo.poster_path}`} onError={defaultImage} alt="ok" />}
                                </div>
                                <div className="infoBox text-white justify-content-start ps-sm-1 ps-md-5">
                                    <div>
                                        <h2 className="mt-3 mt-sm-0">{movieInfo.title} <small className="text-light font-weight-normal">({movieInfo.release_date.split('-')[0]})</small></h2>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center flex-wrap pb-2">
                                            {
                                                movieInfo.genres.map(item => {
                                                    return (
                                                        <Link key={`${movieInfo.id, item.id}`} className="btn-light mt-2 rounded-pill mx-1 px-2" to={`/categories/${item.name}/${item.id}`}> <small>{item.name}</small> </Link>
                                                    )
                                                })
                                            }
                                            <span className="mt-2">{toHours(movieInfo.runtime)}</span>
                                        </div>
                                    </div>
                                    <div className="py-2 d-flex align-items-center">
                                        <div className="d-flex">
                                            <CircleProgressbar width={50} value={movieInfo.vote_average * 10} />
                                            <b className="px-2">User <br /> Score</b>
                                        </div>
                                        <div className="col-12 col-sm-2 d-flex justify-content-around">
                                            <div className="mark-movie d-flex justify-content-center rounded-circle px-2"
                                                onClick={AddToFavoritesList}>
                                                <FontAwesomeIcon className={`h-100 ${marked ? "text-warning" : ""}`} icon={faHeart} />
                                                <div className="rating d-flex justify-content-center py-2">
                                                    <Rating movieId={movieInfo.id} />
                                                </div>
                                            </div>
                                        </div>
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
    function seeGalleryImage(el) {
        setModalImage(movieImages.backdrops[el.target.attributes.index.value].file_path);
    }
    function gallery_RenderFarm() {
        return (
            movieImages.backdrops.map((item, index) => {
                if (item.file_path) {
                    return (
                        <div key={`${item.file_path}`} index={index} onClick={seeGalleryImage} className="galleryImage col-6 col-md-4" type="button" data-bs-toggle="modal" data-bs-target="#seeGalleryImage" >
                            <div className="m-1 rounded" >
                                <img src={`${galleryMovieBaseUrl}/w500_and_h282_face${item.file_path}`} alt="movie pic" />
                            </div>
                        </div>
                    )
                }

            })
        )
    }
    function similarMovies_RenderFarm() {
        if (similarMovies) {
            return (
                <div className="categorySliders px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="py-2 text-capitalize"><b>Similar Movies</b></h3>
                    </div>
                    <MiniSlider data={similarMovies.results} />
                </div>
            )
        }
    }
    return (
        <Style>
            <section className="movieDetails">
                {renderFarm()}
            </section>
            <section className="container">
                {movieImages.backdrops.length > 0 &&
                    <div>
                        <h3>Gallery</h3>
                        <div className="d-flex flex-wrap">
                            {gallery_RenderFarm()}
                        </div>
                    </div>
                }
                <div className="modal fade rounded" id="seeGalleryImage" tabIndex="-1" aria-labelledby="seeGalleryImageLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content position-relative">
                            <button type="button" className="btn-times px-1 rounded" data-bs-dismiss="modal" aria-label="Close"><FontAwesomeIcon icon={faTimes} /></button>
                            {modalImage &&
                                <img src={`${galleryMovieBaseUrl}/original${modalImage}`} alt="original poster" />
                            }
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {keyTrailer.results.lengths && <section className="container">
                <h3>Trailer</h3>
                <YoutubeEmbed embedId={keyTrailer.results[0].key} />
            </section>}
            <section>
                <div className="trailer col-12 col-md-12">
                    {similarMovies_RenderFarm()}
                </div>
            </section>
        </Style>
    )
}
export default SeeMovie;