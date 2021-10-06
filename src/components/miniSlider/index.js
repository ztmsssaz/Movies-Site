import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Style from "./style";
import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
    Pagination,
    EffectFade,
    EffectCoverflow,
    EffectCube,
} from "swiper";

SwiperCore.use([
    EffectCoverflow,
    EffectCube,
    EffectFade,
    Navigation,
    Pagination,
]);

export default function MiniSlider(props) {
    const imgUrl = 'https://murmuring-tundra-31743.herokuapp.com/posters/t/p/w300_and_h450_bestv2/1UkbPQspPbq1FPbFP4VV1ELCfSN.jpg';
    const array = [imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl, imgUrl]
    // Now you can use Swiper
    function renderFarm() {
        return (
            array.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div>
                            <img className="img" src={item} alt="myimage" />
                        </div>
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
                    navigation={{
                        nextEl: '.next',
                        prevEl: '.prev'
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 9,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        640: {
                            slidesPerView: 5,
                        },
                        480: {
                            slidesPerView: 3,
                        },
                        320: {
                            slidesPerView: 2.5,
                        },
                        0: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {renderFarm()}
                </Swiper>
                <div className="prev bg-danger text-white" >prev</div>
                <div className="next bg-dark text-white" >next</div>
            </Style>
        </Fragment>
    );
};