function ModalNotes({index, note, setNote, setNoteObj, notesFilter, setReloadFlag, recipeId}) {

    const tokenUser = JSON.parse(localStorage.getItem("userToken"));

    const user = JSON.parse(localStorage.getItem("registerLogIn"));


    const edit = () => {    
        fetch(`https://polar-reaches-30197.herokuapp.com/notes//${notesFilter[index]._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": tokenUser
            },
            body: JSON.stringify({
                content: note,
                recipe: recipeId,
                user: user._id
            }),
        }).then((response) => {
            setReloadFlag(response.json());
            setNote({
                notes: ""
            })
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
                    <input type="text" name="notes" value={note.notes} onChange={setNoteObj}/>
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