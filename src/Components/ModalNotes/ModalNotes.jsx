function ModalNotes({index, note, setNote, setNoteObj}) {

    const edit = () => {    
        fetch(`https://polar-reaches-30197.herokuapp.com/recipes/${recipe._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": userToken
            },
            body: JSON.stringify({...recipe, accepted: "accepted"}),
        }).then((response) => {
            props.setFetchFlag(response.json());
        });
    }

    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Nota</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" name="name" value={note.name} onChange={setNoteObj}/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={edit}>Editar</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNotes;