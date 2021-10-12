import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../api";
import { posterBaseUrl } from '../../constance';
import { defaultImage, textDots } from '../../helpers';
import Style from "./style";

function Searching() {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState({ results: [] });

    useEffect(() => {
        if (inputValue.length >= 2) {
            getRequest(`/search/movie?query=${inputValue}`)
                .then(res => {
                    setSearchResults(res.data);
                })
        } else if (inputValue.length === 0) {
            setInputValue('');
        }
        var myOffcanvas = document.getElementById('offcanvasTop')
        myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
            setSearchResults({});
            setInputValue('')
        })
    }, [inputValue])
    function searchHandler(e) {
        const value = e.target.value;
        if (value.length >= 2) {
            setInputValue(e.target.value)
        } else {
            setSearchResults({});
            setInputValue('');
        }
    }
    function renderFarm() {
        if (searchResults.results) {
            return (
                searchResults.results.map((item) => {
                    return (
                        <div key={item.id} data-bs-dismiss="offcanvas" aria-label="Close">
                            <Link className="rounded m-1 ltr" to={`/movie/${item.id}`} >
                                <div className="d-flex  align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <div className="searchImage ">
                                        <img src={`${posterBaseUrl}${item.poster_path}`} alt="poster path" onError={defaultImage} />
                                    </div>
                                    <div className="px-2">
                                        <h5 >{item.original_title || item.title} <small>- {item.release_date.split('-')[0]}</small></h5>
                                        <p className="d-block">{textDots(item.overview, 45)}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            )
        }
    }
    return (
        <Style>
            <div className="col-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                <FontAwesomeIcon className="text-light" icon={faSearch} />
            </div>
            <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header justify-content-center align-items-center">
                    <h5 id="offcanvasTopLabel">Search Movie</h5>
                    <button type="button" className="mb-1 mx-2 btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="position-relative col-12 col-sm-10 col-md-6 mx-auto">
                    <input className="form-control text-center" placeholder="Search Movies here"
                        onKeyUp={searchHandler} type="text" />
                    <div className="searchReasultsBox bg-light">
                        {renderFarm()}
                    </div>
                </div>
            </div>

        </Style>
    )
}
export default Searching;