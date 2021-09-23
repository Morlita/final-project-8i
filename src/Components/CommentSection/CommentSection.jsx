import React from 'react'
import './CommentSection.css'

function CommentSection() {
    return (
        <div className='container d-flex flex-wrap align-content-around justify-content-between'>
            <div className="comment-section card text-dark bg-light m-3 flex-fill">
                <div className="card-header"> <span className='p-1'><i class="bi bi-person-circle"></i></span> Santi C. <span className='text-muted float-end fst-italic'>23/08/21</span> </div>
                <div className="card-body">
                    <h5 className="card-title">Las mejores que probé en mi vida</h5>
                    <p className="card-text">La textura y el sabor perfectos en una galleta de chocolate!</p>
                </div>
            </div>
            <div className="comment-section card text-dark bg-light m-3 flex-fill">
                <div className="card-header"><span className='p-1'><i class="bi bi-person-circle"></i></span>Santi C.</div>
                <div className="card-body">
                    <h5 className="card-title">Las mejores que probé en mi vida</h5>
                    <p className="card-text">La textura y el sabor perfectos en una galleta de chocolate!</p>
                </div>
            </div>
            <div className="comment-section card text-dark bg-light m-3 flex-fill">
                <div className="card-header"><span className='p-1'><i class="bi bi-person-circle"></i></span>Santi C.</div>
                <div className="card-body">
                    <h5 className="card-title">Las mejores que probé en mi vida</h5>
                    <p className="card-text">La textura y el sabor perfectos en una galleta de chocolate!</p>
                </div>
            </div>
        </div>
    )
}

export default CommentSection
