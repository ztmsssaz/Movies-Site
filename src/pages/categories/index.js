import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../api";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/loading";
import Style from "./style";

function Categories() {
    let [genres, setGenres] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "categories";

        setLoading(true)
        getRequest('/genre/movie/list')
            .then((res) => {
                setLoading(false)
                setGenres(res.data.genres);
            })
    }, [])

    function renderFarm() {
        return (
            genres.map((item, index) => {
                return (
                    <div className="genreBox col-6 col-sm-4 col-lg-2 text-center py-2" key={item.id}>
                        <div className="shadow mx-2">
                            <Link className="rounded py-4 px-2" to={`/categories/${item.name}/${item.id}`}>
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
            <div className="container py-4">
                <h4 className="py-2 m-0">Movie genres</h4>
                <Loading isLoading={loading} />
                <div className="d-flex flex-wrap align-items-center">
                    {renderFarm()}
                </div>
            </div>
        </Style>
    )
}
export default Categories;