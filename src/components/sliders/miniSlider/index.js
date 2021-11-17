import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { posterBaseUrl } from 'constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import CircleProgressbar from 'components/circle-gauges';
import PropTypes from 'prop-types';
import SwiperCore, {
    Navigation, EffectCube,
} from "swiper";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Style from "./style";
SwiperCore.use([
    EffectCube,
    Navigation,
]);

function MiniSlider(props) {
    const { data = [], type } = props;
    function defaultImage(el) {
        el.target.src = "/images/unkown-poster.jpg";
    }
    function renderFarm() {
        return (
            data.filter(item => item.poster_path || item.profile_path)
                .map((item, index) => {
                    return (
                        <SwiperSlide key={item.id * index}>
                            <Link className="text-dark shadow-sm bg-white rounded-15 m-1" to={`/${item.media_type || type}/${item.id}`}>
                                <div className="position-relative">
                                    <img className='posterPathBackground' src={`${posterBaseUrl}${item.poster_path || item.profile_path}`} alt={item.original_title || item.original_name || item.name} onError={defaultImage} />
                                    {item.vote_average >= 0 && <div className="miniSliderGauge">
                                        <CircleProgressbar fontSize={32} value={(item.vote_average * 10)} width={40} />
                                    </div>}
                                </div>
                                <h6 className="text-center px-1 pt-4 text-truncate" title={item.original_title || item.original_name || item.name}><b><small>{(item.original_title || item.original_name || item.name)}</small></b></h6>
                                {item.release_date && <div className="text-center pb-2">{item.release_date.split('-')[0] || ""}</div>}
                                {item.first_air_date && <div className="text-center pb-2">{item.first_air_date.split('-')[0] || ""}</div>}
                                {item.character && !item.first_air_date && !item.release_date && <p className="text-center text-truncate px-1 pb-2"><small>{item.character}</small></p>}
                                {!item.first_air_date && !item.release_date && !item.character && <div className="text-center">&nbsp;</div>}
                            </Link>
                        </SwiperSlide>
                    )
                })
        )
    }
    return (
        <Fragment>
            <Style>
                <Swiper
                    spaceBetween={5}
                    initialSlide={0}
                    navigation={false}
                    speed={800}
                    breakpoints={{
                        1920: {
                            slidesPerView: 9,
                            slidesPerGroup: 9
                        },
                        1024: {
                            slidesPerView: 7,
                            slidesPerGroup: 7
                        },
                        640: {
                            slidesPerView: 5,
                            slidesPerGroup: 5
                        },
                        480: {
                            slidesPerView: 3,
                            slidesPerGroup: 3
                        },
                        0: {
                            slidesPerView: 2.1,
                            slidesPerGroup: 2.1
                        }
                    }}
                >
                    {renderFarm()}
                    <div style={{ height: '35px' }}></div>
                </Swiper>
            </Style>
        </Fragment >
    );
};
MiniSlider.propTypes = {
    data: PropTypes.array.isRequired,
    type: PropTypes.string,
};
export default MiniSlider;