
import {Link} from 'react-router-dom'
import meatImg from './Images/meat.jpg'
import veggieImg from './Images/veggie.jpg'
import dessertImg from './Images/dessert.jpg'

function CategoriesCards() {

    const dishCategories = [{
        category: 'Con carne',
        img: meatImg,
        alt: 'meat category'
    }, {
        category: 'Veggies',
        img: veggieImg,
        alt: 'veggie category'
    }, {
        category: 'Dulces',
        img: dessertImg,
        alt: 'dessert category'
    }]
    

    return (
        <div className='container'>
            <div className="container my-3 carousel">
                            <h2 className="slider_title">Categorías</h2>
                <div className="row gy-3">
                    {dishCategories.map(({ category, img, alt }, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <Link to={`/categories/${category}`}>
                                <div class="card bg-dark text-white shadow border-0">
                                    <img src={img} class="card-img" alt={alt}></img>
                                    <div class="card-img-overlay d-flex flex-column justify-content-center">
                                        <h4 class="card-title text-center ">{category.toUpperCase()}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoriesCards

// link to {send prop of category to receive in child}