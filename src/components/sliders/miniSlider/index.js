import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import CircleProgressbar from '../../circle-gauges';
import { posterBaseUrl } from '../../../conctant';
import { Swiper, SwiperSlide } from 'swiper/react';
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
            data.map((item, index) => {
                return (
                    <SwiperSlide key={item.id}>
                        <Link className="text-dark shadow-sm rounded-15 m-1" to={`/${type}/${item.id}`}>
                            <div className="position-relative">
                                <img className='posterPathBackground' src={`${posterBaseUrl}${item.poster_path}`} alt={item.original_title || item.original_name || item.name} onError={defaultImage} />
                                <div className="miniSliderGauge">
                                    <CircleProgressbar fontSize={32} value={(item.vote_average * 10)} width={40} />
                                </div>
                            </div>
                            <h6 className="text-center px-1 pt-4 text-truncate" title={item.original_title || item.original_name || item.name}><b><small>{(item.original_title || item.original_name || item.name)}</small></b></h6>
                            {item.release_date && <div className="text-center pb-2">{item.release_date.split('-')[0] || ""}</div>}
                            {item.first_air_date && <div className="text-center pb-2">{item.first_air_date.split('-')[0] || ""}</div>}
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
                    navigation={true}
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
    type: PropTypes.string.isRequired,
};
export default MiniSlider;