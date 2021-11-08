import { useParams, useHistory } from "react-router-dom";
import { getRequest } from '../../api';
import { Fragment, useEffect, useState } from "react";
import MovieList from '../../components/movies-list';
import ReactPaginate from "react-paginate";
import Style from "./style";
import Loading from "../../components/loading";

function Forks() {
    const HISTORY = useHistory();
    let { name } = useParams();
    const [moviesInfo, setMovies] = useState({ results: [] });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = name;
        setLoading(true);
        if (name === "trending") {
            getRequest(`/${name}/all/day`, { page })
                .then((res) => {
                    setMovies(res.data);
                    setLoading(false);
                })
        } else {
            getRequest(`/movie/${name}`, { page })
                .then((res) => {
                    setMovies(res.data);
                    setLoading(false);
                })
        }
    }, [page]);
    return (
        <Style>
            <div className="container">
                <section>
                    <h2 className="text-capitalize mb-4 pt-4">{name.replace('_', ' ')}</h2>
                    <Loading isLoading={loading} />
                    <MovieList moviesInfo={moviesInfo} />
                </section>
                <section className="mx-auto py-4">
                    {moviesInfo.total_pages > 1 && <ReactPaginate className="bg-light"
                        breakLabel={'...'}
                        breakClassName={'text-success'}
                        pageCount={moviesInfo.total_pages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={4}
                        onPageChange={e => { setPage(++e.selected); window.scrollTo(0, 0) }}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />}
                </section>
            </div>
        </Style>
    )
}
export default Forks;