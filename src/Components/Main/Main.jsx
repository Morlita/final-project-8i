import React, { useState, useEffect } from 'react'
import Categories from '../Categories/Categories'
import NewTagsComponent from '../NewTagsComponent/NewTagsComponent'
import Tags from '../Tags/Tags'
import HeroSlider from '../UploadBanner/HeroSlider'
import "./Main.css"


function Main() {

    

    return (
        <div>
            <HeroSlider />
            <div className='container main-container'>
                <div className="row">
                    <Categories />
                </div>
                {/* <div className="row pt-3 rounded tags pb-5">
                    <Tags />
                </div> */}
                <div className="row pt-3 rounded tags pb-5">
                    <NewTagsComponent />
                </div>
            </div>
        </div>
    )
}

export default Main
