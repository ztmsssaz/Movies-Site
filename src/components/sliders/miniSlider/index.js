import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Style from "./style";
import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
    EffectFade,
    EffectCoverflow,
    EffectCube,
} from "swiper";

SwiperCore.use([
    EffectCoverflow,
    EffectCube,
    EffectFade,
    Navigation,
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
                            <img src={item} alt="myimage" />
                            <h2 className="text-center">{index}</h2>
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
                        768: {
                            slidesPerView: 6,
                            slidesPerGroup: 6
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
                </Swiper>
                {/* <div className="prev bg-danger text-white" >prev</div>
                <div className="next bg-dark text-white" >next</div> */}
            </Style>
        </Fragment >
    );
};