import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../../../api";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../../components/loading";
import ReactPaginate from 'react-paginate';
import MoviesList from '../../../components/movies-list';

function ShowCategory() {
    let [movies, setMovies] = useState({ results: [] });
    let { id, name, type } = useParams();
    let [loading, setLoading] = useState(true);
    let [page, setPage] = useState(1);

    useEffect(() => {
        document.title = "category";
        getRequest(`/discover/${type}`, { with_genres: id, page })
            .then((res) => {
                setLoading(false)
                setMovies(res.data);
                window.scrollTo(0, 0);
            })
    }, [page])

    return (
        <Fragment>
            <div className="container">
                <h3 className="pt-4">
                    <span><Link to={`/categories`} className="px-3 fs-4 d-inline-block"><FontAwesomeIcon icon={faAngleLeft} /></Link>{name}</span>
                </h3>
                <Loading isLoading={loading} />
                <MoviesList type={type} moviesInfo={movies} />
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
        </Fragment>
    )
}
export default ShowCategory;