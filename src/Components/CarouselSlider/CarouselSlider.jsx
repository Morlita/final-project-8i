import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import food1 from './CarouselImg/foodpic (1).jpg'
import food2 from './CarouselImg/foodpic (2).jpg'
import food3 from './CarouselImg/foodpic (3).jpg'
import food4 from './CarouselImg/foodpic (4).jpg'
import food5 from './CarouselImg/foodpic (5).jpg'
import food6 from './CarouselImg/foodpic (6).jpg'



function CarouselSlider() {
    let settings = {
        dot: true,
        lazyload: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }


    return (
        <Slider {...settings}>
            <div className="card-wrapper car-slider px-1">
                <div className="card">
                    <div className="card-image">
                        <img src={food1} alt="" />
                    </div>
                    <div className="details">
                        <h4 className='text-center'>Galletas de Chocolate <span className='category text-muted'>Postre</span> </h4>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider px-1">
                <div className="card">
                    <div className="card-image">
                        <img src={food2} alt="" />
                    </div>
                    <div className="details">
                        <h4 className='text-center'>Avocado Toast <span className='category text-muted'>Veggie</span> </h4>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider px-1">
                <div className="card">
                    <div className="card-image">
                        <img src={food3} alt="" />
                    </div>
                    <div className="details">
                        <h4 className='text-center'>Tarta de arándanos <span className='category text-muted'>Postre</span> </h4>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider px-1">
                <div className="card">
                    <div className="card-image">
                        <img src={food4} alt="" />
                    </div>
                    <div className="details">
                        <h4 className='text-center'>Bife con puré <span className='category text-muted'>Con carne</span> </h4>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider px-1">
                <div className="card">
                    <div className="card-image">
                        <img src={food5} alt="" />
                    </div>
                    <div className="details">
                        <h4 className='text-center'>Pizza de vegetales <span className='category text-muted'>Veggie</span> </h4>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider px-1">
                <div className="card">
                    <div className="card-image">
                        <img src={food6} alt="" />
                    </div>
                    <div className="details">
                        <h4 className='text-center'>Ñoquis de papa <span className='category text-muted'>Veggie</span> </h4>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default CarouselSlider
