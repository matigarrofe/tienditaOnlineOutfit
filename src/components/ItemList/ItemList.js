import Item from "../Item/Item"


const ItemList = ({ItemList}) => {
    
  return (
    
    <>
        {ItemList.map((producto) => {
            return <Item 
                key={producto.id}
                nombre={producto.nombre}
                desc={producto.desc}
                precio={producto.precio}
                img={producto.img} 
                    
                />

        })}
    </>
  )
}

export default ItemList