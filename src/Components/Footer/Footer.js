import { Link } from 'react-router-dom';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="mt-3 social-footer container  text-uppercase">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <i class="h1 m-1 p-3 bi bi-facebook"></i>
                    <i class="h1 m-1 p-3 bi bi-twitter"></i>
                    <i class="h1 m-1 p-3 bi bi-instagram"></i>
                    <i class="h1 m-1 p-3 bi bi-whatsapp"></i>
                </div>

            </div>
            <div className="row">
                <div className="d-flex justify-content-center h5">                    
                        <Link to='' className='mx-2 text-decoration-none text-white'>Categorías</Link>
                        <Link to='' className='mx-2 text-decoration-none text-white'>Destacadas</Link>
                        <Link to='' className='mx-2 text-decoration-none text-white'>Filtros</Link>                    
                </div>
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-center">                    
                        <Link to='' className='mx-2 text-decoration-none text-white  text-muted'>Quienes somos</Link>
                        <Link to='' className='mx-2 text-decoration-none text-white  text-muted'>Nuestra misión</Link>                    
                </div>

            </div>
            {/* <div className="row end"></div> */}
        </footer>
    );
}

export default Footer;