import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';
import './Footer.css';

function Footer (){
    return (
        <footer class="mt-3 container-fluid d-flex justify-content-center">
            <img src={facebook} alt="" className="rounded-circle align-self-center" />
            <img src={twitter} alt="" className="rounded-circle ms-2 align-self-center" />
            <img src={instagram} alt="" className="rounded-circle ms-2 align-self-center" />
        </footer>
    );
}

export default Footer;