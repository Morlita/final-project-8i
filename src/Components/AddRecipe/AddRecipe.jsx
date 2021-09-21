function AddRecipe() {
    return(
        <div>
            <h1>Crea tu receta</h1>
            <form className="d-flex flex-column form-contact">

                <label htmlFor="" >Nombre</label>
                <input type="text" name="name" className="w-50" />

                <label htmlFor="" >Tiempo Estimado de Preparacion</label>
                <input type="text" name="value" className="w-50" />

                <label htmlFor="" >Tiempo Estimado de Duracion en el Freezer</label>
                <input type="text" name="rateUSD" className="w-50" />

                <label htmlFor="" >Tiempo Estimado de Duracion en la Heladera</label>
                <input type="text" name="notas" className="w-50" />

                <a className="btn btn-primary w-25 mt-3 mb-5" >Agregar</a>
            </form>
        </div>
        
    )
}

export default AddRecipe;