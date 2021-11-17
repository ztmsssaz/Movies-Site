import Style from "./style";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { posterBaseUrl } from 'constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from 'components/loading';
import PropTypes from 'prop-types';
import CircleProgressbar from 'components/circle-gauges'
import SwiperCore, {
    Navigation,
    Pagination,
    EffectFade,
    EffectCoverflow,
    EffectCube,
    Autoplay,
} from "swiper";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([
    EffectCoverflow,
    EffectCube,
    EffectFade,
    Navigation,
    Pagination,
    Autoplay,
]);
function MainSlider(props) {
    const { data = [] } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data.length) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [data]);

    const imageDefault = (el) => {
        el.target.src = '/images/unkown-poster.jpg';
    }
    function renderFarm() {
        return (
            data.map((item, index) => {
                return (
                    <SwiperSlide key={item.id}>
                        <div className="slideSize">
                            <Link className="position-relative" to={`/movie/${item.id}`}>
                                <img className='posterPathBackground' src={`${posterBaseUrl}${item.poster_path}`} onError={imageDefault} alt={item.original_title} />
                                <div className="mainSliderGauge">
                                    <CircleProgressbar value={item.vote_average * 10} width={50} />
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                )
            })
        )
    }
    return (
        <Style>
            <Swiper
                spaceBetween={4}
                speed={800}
                pagination={true}
                loop={true}
                autoplay={
                    { delay: 4000 }
                }
                breakpoints={{
                    480: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                    320: {
                        slidesPerView: 2.2,
                        slidesPerGroup: 2.2
                    }
                }}
            >
                {renderFarm()}
                <Loading isLoading={loading} />
                <div style={{ height: '70px' }}></div>
            </Swiper>
        </Style>
    );
};
MainSlider.propTypes = {
    data: PropTypes.array.isRequired,
};
export default MainSlider;