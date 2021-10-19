import { Link } from "react-router-dom";
import { getRequest } from '../../api';
import { Fragment, useEffect, useState } from "react";
import { posterBaseUrl } from '../../constance';
import { defaultImage, textDots } from '../../helpers';
import Loading from '../../components/loading';
import Style from "./style";

function Search() {
    const [searchResults, setResults] = useState([]);
    let [searchKeyword, setSearchKeyword] = useState('');
    let [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setIsLoading(true)
    //     getRequest('/search/movie', queryString.parse(search))
    //         .then(response => {
    //             setIsLoading(false)
    //             setResults(response.data.results);
    //         })
    // }, [search])

    function searchRenderFarm() {
        return (
            searchResults.map(item => {
                return (
                    <div key={item.id} className="my-2 movieBox col-5 col-sm-2">
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
    function searchKey(el) {
        setSearchKeyword(el.target.value);
    }
    function renderFilter() {
        return (
            <Fragment>
                <button type="button" data-bs-toggle="modal" data-bs-target="#filters">salam</button>
                <div className="modal fade rounded" id="filters" tabIndex="-1" aria-labelledby="filtersLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content position-relative">
                            <input list="region" />
                            <datalist name="region" id="region">
                                <option>AT</option>
                                <option>IR - iran</option>
                                <option>AGH - Afghanistan</option>
                                <option>Korea</option>
                                <option>USA - united States of america</option>
                            </datalist>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    return (
        <Style>
            <div className="searchForm col-10 mx-auto">
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
            <div className="d-flex flex-wrap justify-content-center">
                {searchRenderFarm()}
            </div>
            {renderFilter()}
        </Style>
    )
}
export default Search;