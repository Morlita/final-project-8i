import { Link } from 'react-router-dom';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';
import './Footer.css';

function Footer() {
    return (
<<<<<<< HEAD
        <footer className="mt-3 pt-3 social-footer container  text-uppercase">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <i className="h1 m-1 p-3 bi bi-facebook"></i>
                    <i className="h1 m-1 p-3 bi bi-twitter"></i>
                    <i className="h1 m-1 p-3 bi bi-instagram"></i>
                    <i className="h1 m-1 p-3 bi bi-whatsapp"></i>
=======
        <footer className='mt-3 pt-3 social-footer container text-uppercase'>
            <div className='row'>
                <div className='d-flex justify-content-center'>
                    <i class='h1 m-1 p-3 bi bi-facebook'></i>
                    <i class='h1 m-1 p-3 bi bi-twitter'></i>
                    <i class='h1 m-1 p-3 bi bi-instagram'></i>
                    <i class='h1 m-1 p-3 bi bi-whatsapp'></i>
>>>>>>> a6ea950 (updating footer responsiveness)
                </div>
            </div>
<<<<<<< HEAD
            <div className="row">
                <div className="d-flex justify-content-center h5">                    
                        <Link to='/' className='mx-2 text-decoration-none text-white'>Home</Link>
                        <Link to='#categories' className='mx-2 text-decoration-none text-white'>Categorías</Link>
                        <Link to='' className='mx-2 text-decoration-none text-white'>Filtros</Link>                    
                        <Link to='' className='mx-2 text-decoration-none text-white'>Destacadas</Link>
=======
            <div className='container d-flex justify-content-center text-center h5'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <Link to='/' className='mx-2 text-decoration-none text-white'>
                            Home
                        </Link>
                    </div>
                    <div className='col-sm-3'>
                        <Link to='' className='mx-2 text-decoration-none text-white'>
                            Categorías
                        </Link>
                    </div>
                    <div className='col-sm-3'>
                        <Link to='' className='mx-2 text-decoration-none text-white'>
                            Filtros
                        </Link>
                    </div>
                    <div className='col-sm-3'>
                        <Link to='' className='mx-2 text-decoration-none text-white'>
                            Destacadas
                        </Link>
                    </div>
>>>>>>> a6ea950 (updating footer responsiveness)
                </div>
            </div>
            <div className='row mt-2'>
                <div className='d-flex justify-content-center'>
                    <Link
                        to=''
                        className='mx-2 text-decoration-none text-white  text-muted'
                    >
                        Quienes somos
                    </Link>
                    <Link
                        to=''
                        className='mx-2 text-decoration-none text-white  text-muted'
                    >
                        Nuestra misión
                    </Link>
                </div>
            </div>
            {/* <div className="row end"></div> */}
        </footer>
    );
}

export default Footer;
