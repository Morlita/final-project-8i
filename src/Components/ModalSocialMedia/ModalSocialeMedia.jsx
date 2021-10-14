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
                    <h5 class="modal-title" id="exampleModalLabel">Comparte a travez de tus redes sociales</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5 className='my-3'>Recetapp es una plataforma mantenida por la comunidad. Ayudanos a llegar a más gente con el fin de resolver el mayor interrogante. ¿Qué comemos hoy?</h5>
                    <div className="d-flex justify-content-around my-2 p-2">
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSocialMedia;