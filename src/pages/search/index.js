import { Link, useLocation } from "react-router-dom";
import { getRequest } from '../../api';
import { useEffect, useState } from "react";
import { posterBaseUrl } from '../../constance';
import { defaultImage } from '../../helpers';
import Loading from '../../components/loading';
import queryString from 'query-string';
import Style from "./style";

function Search() {
    const { search } = useLocation();
    const [searchResults, setResults] = useState([]);
    let [searchKeyword, setSearchKeyword] = useState('');
    let [isLoading, setIsLoading] = useState(true);

    console.log(queryString.parse(search));
    useEffect(() => {
        setIsLoading(true)
        getRequest('/search/movie', queryString.parse(search))
            .then(response => {
                setIsLoading(false)
                setResults(response.data.results);
            })
    }, [search])

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
    function searchKey(el) {
        setSearchKeyword(el.target.value);
    }
    return (
        <Style>
            <div className="searchForm pt-5 mt-5 col-10 mx-auto">
                <form name="search" className="position-relative mb-2">
                    <input type="text" className="form-control py-2 rounded-pill" placeholder="Search for a movie, tv show, person......"
                        onKeyUp={searchKey} />
                    <Link to={`/search?query=${searchKeyword}`}>
                        <button type="submit" className="btn btn-primary py-2 rounded-pill">
                            Search
                        </button>
                    </Link>
                </form>
            </div>
            <Loading isLoading={isLoading} />
            <div className="d-flex flex-wrap">
                {searchRenderFarm()}
            </div>

        </Style>
    )
}
export default Search;