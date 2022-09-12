import Item from "../Item/Item"
import './style.css'

const ItemList = ({ItemList}) => {
    
  return (
    
    <>
      <div className="contenidoCard">

        {ItemList.map((producto) => {
            return <Item 
                key={producto.id}
                nombre={producto.nombre}
                desc={producto.desc}
                precio={producto.precio}
                img={producto.img} 
                    
                />

        })}
      </div>
    </>
  )
}

export default ItemList