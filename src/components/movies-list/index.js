import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posterBaseUrl } from 'constant';
import { defaultImage } from 'helpers';
import CircleProgressbar from 'components/circle-gauges';
import PropTypes from 'prop-types';
import Style from "./style";

function MoviesList(props) {
    const { moviesInfo, type = "movie" } = props;

    useEffect(() => {
    }, [props]);

    function renderFarm() {
        const { results } = moviesInfo;
        return (
            results.map(item => {
                const { vote_average, first_air_date, release_date, media_type, id, poster_path, profile_path, original_name, name, original_title, title, } = item;
                return (
                    <div key={id} className="movieBox my-2 col-6 col-sm-3 col-lg-2">
                        <Link className="text-dark shadow-sm bg-white rounded-15 mx-2" to={`/${media_type || type}/${id}`}>
                            <div className='position-relative'>
                                <img className='posterPathBackground' src={`${posterBaseUrl}${poster_path || profile_path}`} onError={defaultImage} alt="" />
                                {vote_average >= 0 && <div className="rateGauge">
                                    <CircleProgressbar value={vote_average * 10} width={40} />
                                </div>}
                            </div>
                            <h6 className="text-center text-truncate px-1 pt-4" title={original_title || original_name}> <b><small>{title || original_title || name || original_name}</small></b></h6>
                            {release_date && <div className="text-center pb-2">{release_date.split('-')[0]} &nbsp;</div>}
                            {first_air_date && <div className="text-center pb-2">{first_air_date.split('-')[0]}&nbsp;</div>}
                            {!first_air_date && !release_date && <div className="text-center pb-2">&nbsp;</div>}
                        </Link>
                    </div>
                )
            })
        )
    }
    return (
        <Style>
            <section className="d-flex flex-wrap justify-content-start">
                {renderFarm()}
            </section>
        </Style>
    )
}
MoviesList.propTypes = {
    moviesInfo: PropTypes.object.isRequired,
    type: PropTypes.string,
};
export default MoviesList;