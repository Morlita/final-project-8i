import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';
import './Footer.css';

function Footer (){
    return (
        <footer className="mt-3 container-fluid d-flex justify-content-center">
            <img src={facebook} alt="" className="rrss rounded-circle align-self-center" />
            <img src={twitter} alt="" className="rrss rounded-circle ms-2 align-self-center" />
            <img src={instagram} alt="" className="rrss rounded-circle ms-2 align-self-center" />
        </footer>
    );
}

export default Footer;