import { Link } from 'react-router-dom';
import { posterBaseUrl } from '../../constance';
import { defaultImage } from '../../helpers';
import PropTypes from 'prop-types';
import Style from "./style";
import { useEffect } from 'react';

function MoviesList(props) {
    console.log(props);
    const { moviesInfo } = props;

    useEffect(() => {

    }, [props]);

    function renderFarm() {
        const { results } = moviesInfo;
        return (
            results.map(item => {
                return (
                    <div key={item.id} className="movieBox my-2 col-5 col-sm-2">
                        <Link className="text-dark shadow bg-white rounded-3 mx-2" to={`/movie/${item.id}`}>
                            <div>
                                <img className="rounded-3" src={`${posterBaseUrl}${item.poster_path}`} onError={defaultImage} alt="" />
                            </div>
                            <h5 className="p-2 text-center text-truncate">{item.title || item.original_title}</h5>
                        </Link>
                    </div>
                )
            })
        )
    }
    return (
        <Style>
            <section className="d-flex flex-wrap justify-content-center">
                {renderFarm()}
            </section>
        </Style>
    )
}
MoviesList.propTypes = {
    moviesInfo: PropTypes.object.isRequired,
};
export default MoviesList;