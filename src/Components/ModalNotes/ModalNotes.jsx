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
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Editar Nota</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input type="text" name="notes" value={note.notes} onChange={setNoteObj}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={edit}>Editar</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNotes;