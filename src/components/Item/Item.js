import './style.css'
import {Link} from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    
               <>
                <div className="card">
                    <img src={`/assets/img/${img}`} alt={nombre} id='card-img'/>
                    <div className="card-body">
                    <h4 className="card-title">{nombre}</h4>
                    {/* <p className="card-text text-secondary">{desc}</p> Va en el detalle junto con la cantidad*/} 
                    <p><strong>$ {precio}</strong></p>
                    <Link to={`/item/${Item.id}`}>
                      <button className="btn btn-sm bg-primary text-white" id="btnSm">View detail</button>
                    </Link>
                   </div> 
                </div>
                </> 
                
                
                
            
    
  )
}

export default Item

