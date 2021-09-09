import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import twitter from './Images/twitter.png';

function Footer (){
    return (
        <div className="rrss">
            <img src={facebook} alt="" className="rounded-circle" />
            <img src={twitter} alt="" className="rounded-circle ms-2" />
            <img src={instagram} alt="" className="rounded-circle ms-2" />
        </div>
    );
}

export default Footer;