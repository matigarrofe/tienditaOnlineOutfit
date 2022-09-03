import ItemList from '../ItemList/ItemList'
import data from './mock-data'
import { useState, useEffect } from 'react'


const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([])

  const getData = new Promise ((resolve, reject)=> {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

  useEffect(() => {
    getData.then((result) => {
      setItems(result)
      console.log(result)
    })
  }, [])
  
  return (
    <>
    {
      items.length > 0 ? (<ItemList ItemList={items} />) : (<div>Loading...</div>)
    }
      
    </>
  )
  
}

export default ItemListContainer
