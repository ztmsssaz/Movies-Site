import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "api";
import { posterBaseUrl } from 'constant';
import { defaultImage, textDots } from 'helpers';
import PropTypes from 'prop-types';
import Style from "./style";

function Searching(props) {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { id } = props;
    useEffect(() => {
        if (inputValue.length >= 1) {
            getRequest(`/search/multi?query=${inputValue}`)
                .then(res => {
                    setSearchResults(res.data.results);
                })
        } else if (inputValue.length === 0) {
            setInputValue('');
        }
    }, [inputValue]);

    useEffect(() => {
        var myOffcanvas = document.getElementById(`offcanvasTop-${id}`)
        myOffcanvas.addEventListener('hidden.bs.offcanvas', function () {
            setSearchResults([]);
            setInputValue('')
        });
    })

    function searchHandler(e) {
        const value = e.target.value;
        if (value.length >= 1) {
            setInputValue(e.target.value)
        } else if (value.length === 0) {
            setSearchResults([]);
            setInputValue('');
        }
    }
    function renderFarm() {
        if (searchResults.length > 0) {
            return (
                searchResults.map((item) => {
                    return (
                        <div key={item.id} data-bs-dismiss="offcanvas" aria-label="Close">
                            <Link className="rounded m-1 ltr" to={`/movie/${item.id}`} >
                                <div className="d-flex  align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                                    <div className="searchImage ">
                                        <img src={`${posterBaseUrl}${item.poster_path}`} alt="poster path" onError={defaultImage} />
                                    </div>
                                    <div className="px-2">
                                        <h5 >{item.original_title || item.title} {item.release_date && <small >- {item.release_date.split('-')[0]}</small>}</h5>
                                        <p className="d-block">{textDots(item.overview, 45)}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            )
        } else if (inputValue !== '') {
            return (
                <div className="text-center overflow-hidden">
                    <h6>Movie Not Found</h6>
                </div>
            )
        }
    }
    return (
        <Style>
            <div className="col-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasTop-${id}`} aria-controls="offcanvasTop">
                <FontAwesomeIcon className="text-light" icon={faSearch} />
            </div>
            <div className="offcanvas offcanvas-top" tabIndex="-1" id={`offcanvasTop-${id}`} aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header justify-content-center align-items-center">
                    <h5 id="offcanvasTopLabel">Search Movie</h5>
                    <button type="button" className="mb-1 mx-2 btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="position-relative col-12 col-sm-10 col-md-6 px-2 px-sm-0 mx-auto">
                    <input className="form-control text-center" placeholder="Search Movies here"
                        value={inputValue} onChange={searchHandler} type="text" />
                    <div className="searchReasultsBox bg-light">
                        {renderFarm()}
                    </div>
                </div>
            </div>

        </Style>
    )
}
Searching.propTypes = {
    id: PropTypes.number.isRequired,
}
export default Searching;