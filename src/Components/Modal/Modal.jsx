function Modal(props) {
  //setTimeout(() => { 
    //console.log("SIN FALLOS", props.completeRecipe[props.index]);
    //console.log("CON FALLOS", props.completeRecipe[props.index].title)
  //}, 3000);
  
  

    return(
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h1>Titulo</h1>
              <p>Procedimiento</p>
              
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

export default Modal;