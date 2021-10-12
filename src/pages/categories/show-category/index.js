import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../../../api";
import { posterBaseUrl } from "../../../constance";
import { defaultImage } from "../../../helpers";
import Loading from "../../../components/loading";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./style";

function ShowCategory() {
    let [movies, setMovies] = useState({ results: [] });
    let { id, name } = useParams();
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log(id);
        document.title = "category";

        getRequest('/discover/movie', { with_genres: id })
            .then((res) => {
                setLoading(false)
                setMovies(res.data);
            })
    }, [])

    function renderFarm() {
        console.log(movies);
        const { results } = movies;
        return (
            results.map(item => {
                return (
                    <div key={item.id} className="movieBox my-2 col-5 col-sm-2">
                        <Link className="text-dark shadow bg-white rounded-3 mx-2" to={`/movie/${item.id}`}>
                            <div>
                                <img className="rounded-3" src={`${posterBaseUrl}${item.poster_path}`} onError={defaultImage} alt="" />
                            </div>
                            <h5 className="py-2 text-center text-truncate">{item.title || item.original_title}</h5>
                        </Link>
                    </div>
                )
            })
        )
    }

    return (
        <Style>
            <div className="container pt-4 mt-5">
                <h3 className="pt-5">
                    <span>Genres</span>
                    <span className="px-3 fs-4"><FontAwesomeIcon icon={faAngleRight} /></span>
                    <span>{name}</span>
                </h3>
                <Loading isLoading={loading} />
                <div className="d-flex flex-wrap align-items-center">
                    {renderFarm()}
                </div>
            </div>
        </Style>
    )
}
export default ShowCategory;