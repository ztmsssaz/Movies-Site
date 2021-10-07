import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Style from "./style";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { mediaBaseUrl } from '../../../constance';
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
    Autoplay
]);

export default function MainSlider(props) {
    const { data } = props;
    console.log(data);
    const imageDefault = (el) => {
        el.target.src = '/images/unkown-poster.jpg';
        console.log(el.target.src);
    }
    function renderFarm() {
        return (
            data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="slideSize">
                            <Link to={`/see-movie/${index}`}>
                                <img src={`${mediaBaseUrl}${item.poster_path}`} onError={imageDefault} />
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
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    }
                }}
            >
                {renderFarm()}
            </Swiper>
        </Style>
    );
};