
import {Link} from 'react-router-dom'
const ItemDetail = ({id, img, nombre, desc, precio, cantidad}) => {
  
  return (
                <div className='contenidoCard'>
                  <div className="card">
                    <img src={`/assets/img/${img}`} alt={nombre} id='card-img'/>
                    <div className="card-body">
                      <h4 className="card-title">{nombre}</h4>
                      <p className="card-text">{desc}</p>
                      <h5 className="card-text">Stock: {cantidad}</h5>
                      <p><strong>$ {precio}</strong></p>
                        <Link to={`/item/${ItemDetail.id}`}>
                          <button className="btn btn-sm text-white" id="btnSm">Add to Cart</button>
                        </Link>
                    </div> 
                  </div>
                </div>
                
  )
}

export default ItemDetail