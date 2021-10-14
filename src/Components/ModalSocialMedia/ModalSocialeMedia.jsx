import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton,  WhatsappIcon, } from 'react-share';
import {useLocation} from "react-router-dom"


function ModalSocialMedia({title}) {

    let location = useLocation()

    const url = `https://recetapp-comision-8i.netlify.app${location.pathname}`

    return(
        <div class="modal fade" id="socialMedia" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Comparte a travez de tus redes sociale</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4>Recetapp es una plataforma mantenida por la comunidad. Ayudanos a llegar a mas gente con el fin de resolver el mayor interrogante. ¿Que comemos hoy?</h4>
                    <FacebookShareButton url={url} quote={`Mira esta receta de ${title} que encontre. Está genial`} hashtag="#Recetapp">  
                        <FacebookIcon />  
                    </FacebookShareButton>  
                    <TwitterShareButton title={`Modo ${title} en Recetapp`} url={url}  hashtag="#Recetapp">
                        <TwitterIcon />  
                    </TwitterShareButton> 
                    <WhatsappShareButton title={`Mira este ${title} en Recetapp`} separator=" " url={url}>
                        <WhatsappIcon />  
                    </WhatsappShareButton> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSocialMedia;