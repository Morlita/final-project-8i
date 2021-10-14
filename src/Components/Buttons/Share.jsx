import React from 'react'
import ModalSocialMedia from '../ModalSocialMedia/ModalSocialeMedia'
import SharePng from '../Navbar/Logo/share.png'
import './Buttons.css'


function Share({title}) {
    return (
        <div>
            <button type="button" className="btn rounded-pill btn-outline-danger m-1 shadow" data-bs-toggle="modal" data-bs-target="#socialMedia"> <img src={SharePng} className='share-png' alt="share" /> <span className='d-none d-md-block'>Compartir</span></button>
            <ModalSocialMedia title={title}/>
        </div>
    )
}

export default Share
