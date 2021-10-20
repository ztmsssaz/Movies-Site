import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../../../api";
import { posterBaseUrl } from "../../../constance";
import { defaultImage } from "../../../helpers";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../../components/loading";
import ReactPaginate from 'react-paginate';
import Style from "./style";

function ShowCategory() {
    let [movies, setMovies] = useState({ results: [] });
    let { id, name } = useParams();
    let [loading, setLoading] = useState(true);
    let [page, setPage] = useState(1);

    useEffect(() => {
        document.title = "category";
        getRequest('/discover/movie', { with_genres: id, page })
            .then((res) => {
                setLoading(false)
                setMovies(res.data);
                window.scrollTo(0, 0);
            })
    }, [page])

    function renderFarm() {
        console.log(movies);
        const { results } = movies;
        return (
            results.map(item => {
                return (
                    <div key={item.id} className="movieBox my-2 col-6 col-sm-3 col-md-2">
                        <Link className="text-dark shadow bg-white rounded-3 mx-2" to={`/movie/${item.id}`}>
                            <div>
                                <img className="rounded-3" src={`${posterBaseUrl}${item.poster_path}`} onError={defaultImage} alt="" />
                            </div>
                            <h6 className="text-center text-truncate p-2 fs-6"><small>{item.title || item.original_title}</small></h6>
                        </Link>
                    </div>
                )
            })
        )
    }
    return (
        <Style>
            <div className="container">
                <h3 className="pt-4">
                    <span><Link to={`/categories`} className="px-3 fs-4 d-inline-block"><FontAwesomeIcon icon={faAngleLeft} /></Link>{name}</span>
                </h3>
                <Loading isLoading={loading} />
                <div className="d-flex flex-wrap align-items-center">
                    {renderFarm()}
                </div>
                <div className="mx-auto py-4">
                    <ReactPaginate
                        breakLabel={'...'}
                        breakClassName={'text-success'}
                        pageCount={movies.total_pages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={4}
                        onPageChange={e => setPage(++e.selected)}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        </Style>
    )
}
export default ShowCategory;