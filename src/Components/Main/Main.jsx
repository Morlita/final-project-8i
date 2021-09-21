import React from 'react'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import CategoriesCardComponent from '../CategoriesCardComponent/CategoriesCardComponent'
import CategoriesCards from '../CategoriesCards/CategoriesCards'
import Tags from '../Tags/Tags'
import UploadRecipeBanner from '../UploadBanner/UploadBanner'


function Main() {
    return (
        <div className='container'>
            <div className="row">
                <div className="h-75 d-inline-block">
                    <UploadRecipeBanner />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4">
                <div className="col-md-3">
                    <Tags />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <CategoriesCards />
                    </div>
                    <div className="row">
                        <div className="container my-3 mx-3 carousel">
                            <h2 className="slider_title">Favoritos de todos los tiempos</h2>
                            <CarouselSlider />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                        <h2 className="slider_title">recetas random</h2>
                            <CategoriesCardComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
