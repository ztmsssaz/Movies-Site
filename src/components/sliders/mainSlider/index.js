import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Style from "./style";
import React, { useEffect, useState } from 'react';
import CircleProgressbar from '../../circle-gauges'
import { Swiper, SwiperSlide } from 'swiper/react';
import { posterBaseUrl } from '../../../constance';
import Loading from '../../loading';

import SwiperCore, {
    Navigation,
    Pagination,
    EffectFade,
    EffectCoverflow,
    EffectCube,
    Autoplay,
} from "swiper";
import { Link } from 'react-router-dom';

SwiperCore.use([
    EffectCoverflow,
    EffectCube,
    EffectFade,
    Navigation,
    Pagination,
    Autoplay,
]);
export default function MainSlider(props) {
    const { data } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (data.length) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [props])
    const imageDefault = (el) => {
        el.target.src = '/images/unkown-poster.jpg';
        console.log(el.target.src);
    }
    function renderFarm() {
        return (
            data.map((item, index) => {
                return (
                    <SwiperSlide key={item.id}>
                        <div className="slideSize">
                            <Link className="position-relative" to={`/movie/${item.id}`}>
                                <img src={`${posterBaseUrl}${item.poster_path}`} onError={imageDefault} alt={item.original_title} />
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