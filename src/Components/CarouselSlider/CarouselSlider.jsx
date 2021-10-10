import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom'
import "./Carousel.css"



function CarouselSlider({ reloadFlag, setReloadFlag, carouselArr }) {
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

    const handleClick = () => {
        if (setReloadFlag) {
            setReloadFlag(!reloadFlag)
        }
    }


    return (
        <div>
            <Slider {...settings}>
                {carouselArr && carouselArr.map(({ title, _id, category, img }) => (
                    <div className="card-wrapper car-slider px-1" key={_id}>
                        <Link to={`/recipe/${_id}`} onClick={handleClick}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={img} alt="recipe" />
                                </div>
                                <div className="details">
                                    <h4 className='text-center'>{title.toUpperCase()} <span className='category text-muted'>{category.toUpperCase()}</span> </h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>

    )
}

export default CarouselSlider
