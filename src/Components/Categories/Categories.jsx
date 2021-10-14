
import { Link } from 'react-router-dom'
import meatImg from './Images/meat.jpg'
import veggieImg from './Images/veggie.jpg'
import dessertImg from './Images/dessert.jpg'
import "./Categories.css"

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
        <div className='container category-content py-5' id="categories">
            <div className="row gy-3">
                {dishCategories.map(({ category, img, alt }, index) => (
                    <div className="col-12 col-md-4" key={index}>
                        <Link to={`/categories/${category}`}>
                            <div className="card bg-dark text-white shadow border-0">
                                <img src={img} className="card-img" alt={alt}></img>
                                <div className="card-img-overlay d-flex flex-column justify-content-center">
                                    <h4 className="card-title text-center rounded lh-base">{category.toUpperCase()}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesCards

// link to {send prop of category to receive in child}