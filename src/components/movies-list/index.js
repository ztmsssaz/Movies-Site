import { Link } from 'react-router-dom';
import { posterBaseUrl } from '../../conctant';
import { defaultImage } from '../../helpers';
import CircleProgressbar from '../../components/circle-gauges';
import PropTypes from 'prop-types';
import Style from "./style";
import { useEffect } from 'react';

function MoviesList(props) {
    const { moviesInfo, type } = props;

    useEffect(() => {

    }, [props]);

    function renderFarm() {
        const { results } = moviesInfo;
        return (
            results.map(item => {
                return (
                    <div key={item.id} className="movieBox my-2 col-6 col-sm-3 col-lg-2">
                        <Link className="text-dark shadow-sm bg-white rounded-15 mx-2" to={`/${type || item.media_type}/${item.id}`}>
                            <div className='position-relative'>
                                <img className='posterPathBackground' src={`${posterBaseUrl}${item.poster_path}`} onError={defaultImage} alt="" />
                                <div className="rateGauge">
                                    <CircleProgressbar value={item.vote_average * 10} width={40} />
                                </div>
                            </div>
                            <h6 className="text-center text-truncate px-1 pt-4" title={item.original_title || item.original_name}> <b><small>{item.title || item.original_title || item.name || item.original_name}</small></b></h6>
                            {item.release_date && <div className="text-center pb-2">{item.release_date.split('-')[0]} &nbsp;</div>}
                            {item.first_air_date && <div className="text-center pb-2">{item.first_air_date.split('-')[0]}&nbsp;</div>}
                            {!item.first_air_date && !item.release_date && <div className="text-center pb-2">&nbsp;</div>}
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