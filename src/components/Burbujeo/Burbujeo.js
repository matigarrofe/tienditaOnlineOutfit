import { useState } from "react";
import './style.css'

const Burbujeo = () => {

    const [openModal, setOpenModal] = useState(false);
    
    
    const showModal = () => {
        setOpenModal(!openModal)
    }
 
    const detenerPropagacion = (event) => {
        event.stopPropagation()
    }
    
    return (
            <div className="container" onClick={showModal}>
                <button onClick={showModal}>Abrir</button>
                {
                    openModal ? 
                    <div className="container ventanaModal">
                        <div className="container contenidoModal text-center" onClick={detenerPropagacion}>
                            Modal
                            <button onClick={showModal}>Cerrar</button>
                        </div>
                    </div>
                    :
                    null

                }

    </div>
  )
}

export default Burbujeo