// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from '../../api';
import { posterBaseUrl, backgroundMovieBaseUrl } from "../../constance";
import Style from "./style";

function SeeMovie() {
    const { id } = useParams();
    const [movieInfo, setMovieData] = useState([]);
    const [movieImages, setMovieImages] = useState([{}]);
    useEffect(() => {
        getRequest(`/movie/${id}`)
            .then(response => {
                setMovieData(response.data);
            })
        getRequest(`/movie/${id}/images`)
            .then(response => {
                setMovieImages(response.data.backdrops.slice(0, 1));
            })
        console.log(movieImages[0].file_path);
    }, []);
    function errrr(el) {
        el.target.src = "/images/unkown-poster.jpg";
        console.log(el.target.src);
    }
    function renderFarm() {
        return (
            <div>
                <img className="img" src={`${posterBaseUrl}${movieInfo.poster_path}`} onError={errrr} alt="ok" />
            </div>
        )

    }

    return (
        <Style>
            <section className="movieDetails pt-5" >
                <div className="container py-5">
                    <div className="backgroundMovie" style={{ backgroundImage: `url(${backgroundMovieBaseUrl}${movieImages[0].file_path})` }}>
                        <div className="poster d-flex">
                            {/* <img className="img" src={`${posterBaseUrl}${movieInfo.poster_path}`} alt="" /> */}
                            {/* <img className="img" src={`${posterBaseUrl}${movieInfo.backdrop_path}`} alt="" /> */}
                        </div>
                        <div className="infoBox">
                            {renderFarm()}
                        </div>
                    </div>
                </div>
            </section>
        </Style>
    )
}
export default SeeMovie;