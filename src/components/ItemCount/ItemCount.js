import { useState } from "react"
import './style.css'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const suma = () => {
        setContador(contador + 1)
    } 
    const resta = () => {
        setContador(contador - 1)
    }
    const reset = () => {
        setContador(0)
    }
  return (
    <>  
        <div className="container" id="counterContainer">
            <div className="row">
                <div className="col-lg-12" id="botones">
                    <h2 className="text-center">Contador</h2>
                    
                    <button class='btn btn-outline-danger btn-sm' onClick={resta}>-</button>
                    <h4 className="text-center">{contador}</h4>
                    <button class='btn btn-outline-success btn-sm' onClick={suma}>+</button>
                    <button class='btn btn-outline-primary btn-sm'  onClick={reset}>Reset</button>
                    <button class='btn btn-outline-warning btn-sm' id='agregar'>Agregar al carrito</button>
                </div>
                <div className="col-lg-12">
                    
                </div>
            </div>
        </div>
       
        
    </>
    
  )
}

export default ItemCount