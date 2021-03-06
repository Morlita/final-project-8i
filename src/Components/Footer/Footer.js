import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className='social-footer text-uppercase mt-auto d-grid align-items-center'>
            <div className="container align-middle">                
                <div className='row'>
                    <div className='d-flex justify-content-center'>
                        <i className='h1 m-1 p-3 bi bi-facebook'></i>
                        <i className='h1 m-1 p-3 bi bi-twitter'></i>
                        <i className='h1 m-1 p-3 bi bi-instagram'></i>
                        <i className='h1 m-1 p-3 bi bi-whatsapp'></i>
                    </div>
                </div>
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
                            to='/aboutUs'
                            className='mx-2 text-decoration-none text-white  text-muted'
                        >
                            Nuestra misión
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
