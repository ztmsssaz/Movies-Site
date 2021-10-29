import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../api";
import Loading from "../../components/loading";
import Style from "./style";

function Categories() {
    let [TVGenres, setTVGenres] = useState([]);
    let [movieGenres, setMovieGenres] = useState([]);
    let [loading, setLoading] = useState(false);

    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        document.title = "Categories";
        setTimeout(() => {
            setLoading(true);
            getRequest('/genre/movie/list')
                .then((res) => {
                    setLoading(false);
                    if (res.status === 200 && mounted.current) {
                        setMovieGenres(res.data.genres);
                    }
                });
            getRequest('/genre/tv/list')
                .then((res) => {
                    setLoading(false);
                    if (res.status === 200 && mounted.current) {
                        setTVGenres(res.data.genres);
                    }
                })
        }, 200);

        return () => mounted.current = false;
    }, [])

    function MoviesRenderFarm() {
        return (
            movieGenres.map((item, index) => {
                return (
                    <div className="genreBox col-6 col-sm-4 col-lg-2 text-center py-2" key={item.id}>
                        <div className="shadow-sm mx-2">
                            <Link className="rounded py-4 px-2" to={`/categories/movie/${item.name}/${item.id}`}>
                                <h5>{item.name}</h5>
                            </Link>
                        </div>
                    </div>
                )
            })
        )
    }
    function tvShowRenderFarm() {
        return (
            TVGenres.map((item, index) => {
                return (
                    <div className="genreBox col-6 col-sm-4 col-lg-2 text-center py-2" key={item.id}>
                        <div className="shadow-sm mx-2">
                            <Link className="rounded py-4 px-2" to={`/categories/tv/${item.name}/${item.id}`}>
                                <h5>{item.name}</h5>
                            </Link>
                        </div>
                    </div>
                )
            })
        )
    }
    return (
        <Style>
            <div className="py-2 bg-light">
                <div className="container py-4">
                    <h4 className="py-2 m-0">Movie genres</h4>
                    <Loading isLoading={loading} />
                    <div className="d-flex flex-wrap align-items-center">
                        {MoviesRenderFarm()}
                    </div>
                </div>
            </div>
            <div className="py-2 bg-gray">
                <div className="container py-4">
                    <h4 className="py-2 m-0">TV Show genres</h4>
                    <Loading isLoading={loading} />
                    <div className="d-flex flex-wrap align-items-center">
                        {tvShowRenderFarm()}
                    </div>
                </div>
            </div>
        </Style>
    )
}
export default Categories;