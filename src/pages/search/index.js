import { useLocation, useHistory } from "react-router-dom";
import { getRequest } from '../../api';
import { Fragment, useEffect, useState } from "react";
import MovieList from '../../components/movies-list';
import ReactPaginate from "react-paginate";
import queryString from 'query-string';
import Style from "./style";

function Search() {
    const HISTORY = useHistory();
    const { search } = useLocation();
    const PARAMS = queryString.parse(search);
    const [moviesInfo, setMovies] = useState({ results: [] });
    const [with_genres, setWith_genres] = useState('');
    const [searchInput, setSearchInput] = useState(PARAMS.query);
    const [page, setPage] = useState(1);
    document.title = "Search";

    useEffect(() => {
        if (PARAMS.query) {
            getRequest('/search/multi', { query: queryString.parse(search).query || ' ', page })
                .then((res) => {
                    setMovies(res.data);
                })
        }
        // eslint-disable-next8-line react-hooks/exhaustive-deps
    }, [search, page]);

    function searchRenderFarm() {
        const { results } = moviesInfo;
        if (results.length > 0) {
            return (
                <MovieList moviesInfo={moviesInfo} />
            )
        } else if (searchInput) {
            return (
                <div className="text-center text-muted py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="171.273" height="171.273" fill="#032541ee">
                        <path d="M132.306 40.82c-10.2-11.864-24.934-18.896-40.58-19.382q-.976-.034-1.952-.034a56.5 56.5 0 0 0-39.843 16.461C31.64 56.117 28.144 84.5 41.46 106.637a10.5 10.5 0 0 1-1.509 12.854l-21.017 21.016a6.27 6.27 0 0 0-1.81 4.511 5.37 5.37 0 0 0 1.644 3.881 5.78 5.78 0 0 0 7.852-.121l21.3-21.3c3.352-3.4 8.595-4.068 12.692-1.615 8.788 5.306 18.86 8.107 29.127 8.1a56.44 56.44 0 0 0 42.352-19.172c18.496-21.158 18.588-52.707.214-73.972zm-8.237 66a45.04 45.04 0 0 1-34.317 15.865h-.008a45.04 45.04 0 0 1-34.318-15.857 45.29 45.29 0 0 1-.008-58.283 45.04 45.04 0 0 1 68.643-.007c14.162 16.846 14.165 41.433.008 58.283zm-47.74-35.9a6.7 6.7 0 0 0 0-9.479 6.52 6.52 0 0 0-4.763-1.9 6.67 6.67 0 0 0-4.716 1.9c-1.693 1.693-2.354 4.162-1.735 6.475s2.427 4.12 4.74 4.74 4.78-.042 6.475-1.735zm35.775-9.475a6.68 6.68 0 0 0-4.723-1.9 6.83 6.83 0 0 0-4.762 1.9 6.71 6.71 0 0 0-.005 9.484 6.71 6.71 0 0 0 9.484.005 6.71 6.71 0 0 0 .005-9.484zM89.473 86.2a22.45 22.45 0 0 0-18.013 8.96c-1.12 1.475-.83 3.58.644 4.698s3.58.83 4.698-.644a15.88 15.88 0 0 1 25.343 0c1.132 1.437 3.205 1.702 4.662.597s1.76-3.174.68-4.65a22.45 22.45 0 0 0-18.015-8.96z"></path>
                    </svg>
                    <h3>Not Found</h3>
                </div>
            )
        } else {
            return (
                <div className="text-center text-muted py-5">
                    <svg className="me-4" xmlns="http://www.w3.org/2000/svg" width="137" height="129">
                        <rect width="88" height="129" rx="5" fill="#032541" x="49"></rect>
                        <path d="M75.443 47.275A31.83 31.83 0 0 0 52.3 36.226q-.557-.02-1.113-.02a32.22 32.22 0 0 0-22.719 9.386c-10.43 10.41-12.423 26.587-4.83 39.215a5.99 5.99 0 0 1-.86 7.33L10.8 104.12c-.676.684-1.048 1.61-1.032 2.572a3.06 3.06 0 0 0 .938 2.213 3.3 3.3 0 0 0 4.477-.069L27.33 96.69a5.9 5.9 0 0 1 7.237-.921 32.09 32.09 0 0 0 16.609 4.616c9.247-.003 18.046-3.986 24.15-10.932C85.87 77.386 85.92 59.4 75.443 47.275zm-4.7 37.635c-4.88 5.74-12.034 9.046-19.568 9.046a25.68 25.68 0 0 1-19.569-9.042c-8.076-9.606-8.076-23.628 0-33.234 4.882-5.74 12.038-9.048 19.573-9.046s14.7 3.305 19.57 9.044a25.83 25.83 0 0 1-.004 33.232z" fill="#999">

                        </path>
                    </svg>
                    <p className="py-2">Search Movie Name Or Use Filters</p>
                </div>
            )
        }
    }

    function setGenresCheckbox(el) {
        let checkbox = el.target;
        console.log(checkbox.checked);
        if (checkbox.checked === true) {
            setWith_genres(`${with_genres}${checkbox.value},`);
        } else {
            setWith_genres(with_genres.replace(`${checkbox.value},`, ''));
        }
    }

    function renderFilter() {
        return (
            <Fragment>
                <div className="modal fade rounded" id="filters" tabIndex="-1" aria-labelledby="filtersLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content position-relative d-flex flex-row">
                            <nav className="col-2 me-4 py-2">
                                <div className="nav nav-tabs flex-column" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-genres-tab" data-bs-toggle="tab" data-bs-target="#nav-genres" type="button" role="tab"
                                        aria-controls="nav-genres" aria-selected="true">Genres</button>
                                    <button className="nav-link" id="nav-Year-tab" data-bs-toggle="tab" data-bs-target="#nav-year" type="button" role="tab"
                                        aria-controls="nav-year" aria-selected="false">Year</button>
                                    <button className="nav-link" id="nav-country-tab" data-bs-toggle="tab" data-bs-target="#nav-country" type="button" role="tab"
                                        aria-controls="nav-country" aria-selected="false">Country</button>
                                </div>
                            </nav>
                            <div className="tab-content col-10" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-genres" role="tabpanel" aria-labelledby="nav-genres-tab">
                                    <div className="d-flex flex-wrap">

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-year" role="tabpanel" aria-labelledby="nav-Year-tab">

                                </div>
                                <div className="tab-pane fade" id="nav-country" role="tabpanel" aria-labelledby="nav-country-tab">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    function updateQueryParams(e) {
        var value = e.target.value;
        setSearchInput(value);
        if (!value) {
            setMovies({ results: [] });
        }
        HISTORY.push(`/search?query=${value}`);
    }
    return (
        <Style>
            <div className="container">
                <section className="searchForm col-10 mx-auto">
                    <form name="search" className="position-relative pt-2 mb-2" onSubmit={e => e.preventDefault()}>
                        <input value={searchInput} type="text" className="form-control py-2 rounded-pill" placeholder="Search for a movie ....."
                            onChange={updateQueryParams} />
                        <button type="button" className="btn btn-primary mt-2 py-2 rounded-pill" data-bs-toggle="modal" data-bs-target="#filters">
                            Filters
                        </button>
                    </form>
                    {renderFilter()}
                </section>
                <section>
                    {searchRenderFarm()}
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
export default Search;