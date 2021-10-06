import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Style from "./style";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    const imgUrl = 'https://murmuring-tundra-31743.herokuapp.com/posters/t/p/w300_and_h450_bestv2/1UkbPQspPbq1FPbFP4VV1ELCfSN.jpg';
    const array = [imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl]
    // Now you can use Swiper
    function renderFarm() {
        return (
            array.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="slideSize">
                            <Link to={`/see-movie/${index}`}>
                                <img className="" src={item} alt="myimage" />
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