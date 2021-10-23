import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className='social-footer mt-auto d-grid align-items-center'>
            <div className="container align-middle text-uppercase">                
                <div className='container mt-3 d-flex justify-content-center text-center h5'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <Link to='/' className='text-decoration-none text-white'>
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex justify-content-center'>
                        <i className='h1 m-1 p-3 bi bi-facebook'></i>
                        <i className='h1 m-1 p-3 bi bi-twitter'></i>
                        <i className='h1 m-1 p-3 bi bi-instagram'></i>
                        <i className='h1 m-1 p-3 bi bi-whatsapp'></i>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='d-flex justify-content-center'>
                        <Link
                            to='/aboutUs'
                            className='mx-3 text-decoration-none text-white'
                        >
                            Quienes somos
                        </Link>
                        <Link
                            to='/ourMission'
                            className='mx-3 text-decoration-none text-white'
                        >
                            Nuestra misión
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-muted">
                <p className='text-center'>© Comisión 8i 2021</p>
            </div>
        </footer>
    );
}

export default Footer;
