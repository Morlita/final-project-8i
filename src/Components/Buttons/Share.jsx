import React from 'react'
import ModalSocialMedia from '../ModalSocialMedia/ModalSocialeMedia'

function Share({title}) {
    return (
        <div>
            <button type="button" className="btn rounded-pill btn-outline-danger m-1 shadow" data-bs-toggle="modal" data-bs-target="#socialMedia"><i className="bi bi-box-arrow-up-right"></i><span className='d-none d-md-block'>Compartir</span></button>
            <ModalSocialMedia title={title}/>
        </div>
    )
}

export default Share
