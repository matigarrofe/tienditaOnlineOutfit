import { useState } from 'react';
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({id, img, nombre, desc, precio}) => {
  const [contador, setContador] = useState(0);

  const onAdd = (dato) => {
    console.log('hizo click', dato)
    setContador(dato)

  }


  return (
                <div className='contenidoCard'>
                  <div className="card">
                    <img src={`/public/assets/img/${img}`} alt={nombre} id='card-img'/>
                    <div className="card-body">
                      <h4 className="card-title">{nombre}</h4>
                      <p className="card-text">{desc}</p>
                      <h6><strong>Cantidad de prendas: {contador}</strong></h6>
                      <p><strong>$ {precio}</strong></p>
                        <Link to={`/item/${ItemDetail.id}`}>
                          {/* <button className="btn btn-sm text-white" id="btnSm">Add to Cart</button> */}
                        </Link>
                    </div> 
                    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                  </div>
                </div>
                
  )
}

export default ItemDetail