const EventListener = () => {
    const enviarFormulario = (event) => {
        event.preventDefault()
        console.log('Se envio el formulario')
    }
    return (
    <div className="container pt-5">
        <p className="text-center">Comportamientos</p>
            <form className="container" onSubmit={enviarFormulario}>
                <input placeholder='email' />
                <button type="submit" className="btn btn-sm">Send Form</button>
            </form>
    </div>
  )
}

export default EventListener