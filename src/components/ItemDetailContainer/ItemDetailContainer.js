import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getFetch from "../helpers/getFetch"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const {productId} = useParams({})

  useEffect(()=> {
    getFetch.then(prod => prod.find(item=>item.id === parseInt(productId)))
    .then(prod => setProduct(prod))
    .catch(err => console.log(err))
  },[productId])




  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer