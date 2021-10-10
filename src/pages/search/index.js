import { Link, useParams } from "react-router-dom";
import { getRequest } from '../../api';
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { posterBaseUrl } from '../../constance';
import { defaultImage } from '../../helpers';
import Style from "./style";

function Search() {
    const { keyword } = useParams();
    const [searchResults, setResults] = useState([]);
    const params = { api_key: '4ba2c80bd43f2892ecb3349fa445015f', query: `${keyword}` };
    useEffect(() => {
        getRequest('/search/multi', params)
            .then(response => {
                setResults(response.data.results);
            })
    }, [])

    function searchRenderFarm() {
        return (
            searchResults.map(item => {
                return (
                    <div key={item.id} className="d-flex flex-column flex-wrap">
                        <div className="">
                            <Link to={`/movie/${item.id}`}>
                                <img className="mx-auto" width="100px" src={`${posterBaseUrl}${item.poster_path}`} onError={defaultImage} alt="" />
                            </Link>
                        </div>
                        <h5>{item.title}</h5>
                    </div>
                )
            })
        )
    }

    return (
        <Style>
            <div className="searchBox pt-5 mt-4 d-flex flex-wrap">
                {searchRenderFarm()}
            </div>

        </Style>
    )
}
export default Search;