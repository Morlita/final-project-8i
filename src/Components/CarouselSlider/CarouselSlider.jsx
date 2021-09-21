import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import food2 from './CarouselImg/foodpic (2).jpg'
import { Link } from 'react-router-dom'



function CarouselSlider({reloadFlag, setReloadFlag}) {
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

    const [carousel, setCarousel] = useState([])

    useEffect(() => {
        fetch(`https://polar-reaches-30197.herokuapp.com/recipes/`)
            .then(response => response.json())
            .then(data => setCarousel(data))
            .catch(err => { console.log(err) })
    }, [])

    const handleClick = ()=> {
        if(setReloadFlag){
            setReloadFlag(!reloadFlag)
        }
    }

    return (
        <Slider {...settings}>
            {carousel.map(({title, _id, category, img}, index) => (

                <div className="card-wrapper car-slider px-1" key={index}>
                    <Link to={`/recipe/${_id}`} onClick={handleClick}>
                        <div className="card">
                            <div className="card-image">
                                <img src={food2} alt="recipe" />
                            </div>
                            <div className="details">
                                <h4 className='text-center'>{title.toUpperCase()} <span className='category text-muted'>{category.toUpperCase()}</span> </h4>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </Slider>
    )
}

export default CarouselSlider
