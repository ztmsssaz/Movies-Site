import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import { getRequest } from '../../api';

function DropSearch() {
    const [inputValue, setInputValue] = useState(null);
    function searchMovie() {
        getRequest('/search/movie', { query: inputValue })
            .then(response => {
                console.log(response.data);
            }
            )
    }

    function renderFarm() {
        return (
            <Fragment>
                <div>
                    <span type="button" id="dropdownSearch" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon className="text-light" icon={faSearch} />
                    </span>
                    <div className="dropdown-menu" aria-labelledby="dropdownSearch">
                        <input value={inputValue} onKeyUp={setInputValue(inputValue)} />
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <div>
            {renderFarm}
        </div>
    )
}

export default DropSearch;