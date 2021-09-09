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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }


    return (
        <Slider {...settings}>
            <div className="card-wrapper car-slider">
                <div className="card">
                    <div className="card-image">
                        <img src={food1} alt="" />
                    </div>
                    <div className="details">
                        <h2>Galletas de Chocolate <span className= 'category text-muted'>Postre</span> </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider">
                <div className="card">
                    <div className="card-image">
                        <img src={food2} alt="" />
                    </div>
                    <div className="details">
                        <h2>Avocado Toast <span className= 'category text-muted'>Veggie</span> </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider">
                <div className="card">
                    <div className="card-image">
                        <img src={food3} alt="" />
                    </div>
                    <div className="details">
                        <h2>Tarta de arándanos <span className= 'category text-muted'>Postre</span> </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider">
                <div className="card">
                    <div className="card-image">
                        <img src={food4} alt="" />
                    </div>
                    <div className="details">
                        <h2>Bife con puré <span className= 'category text-muted'>Con carne</span> </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider">
                <div className="card">
                    <div className="card-image">
                        <img src={food5} alt="" />
                    </div>
                    <div className="details">
                        <h2>Pizza de vegetales <span className= 'category text-muted'>Veggie</span> </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper car-slider">
                <div className="card">
                    <div className="card-image">
                        <img src={food6} alt="" />
                    </div>
                    <div className="details">
                        <h2>Ñoquis de papa <span className= 'category text-muted'>Veggie</span> </h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default CarouselSlider
