import { useParams } from 'react-router-dom';
import MediumCard from "../MediumCard/MediumCard";

function SearchBar(props) {
    let { searchURL } = useParams();
    
  return (
    <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
            {props.recipe && props.recipe.map(({ _id, title, time, img, likes }) => (
                <MediumCard id={_id} title={title} time={time} img={img} likes={likes} />
            ))}
        </div>
    </div>
  )
}

export default SearchBar;
