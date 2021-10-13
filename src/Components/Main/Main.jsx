import Categories from '../Categories/Categories'
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
                <div className="row rounded tags pb-3">
                    <Tags />
                </div>
            </div>
        </div>
    )
}

export default Main
