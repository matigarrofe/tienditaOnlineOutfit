import ItemList from '../ItemList/ItemList'
import data from './mock-data'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const {categoryId} = useParams()
  console.log('categoryId',categoryId)

  const [items, setItems] = useState([])

  const getData = new Promise ((resolve, reject)=> {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

  useEffect(() => {
    getData.then((result) => {
      if(categoryId){
        const newProducts = result.filter(items=>items.categoria === categoryId)
      setItems(newProducts)
      } else {
        setItems(result)
      }
      
      // console.log(newProducts)
    })
  }, [categoryId])
  
  return (
    <>
    {
      <div className='container'>
            {items.length > 0 ? (<ItemList ItemList={items} />) : 
            (<div className='text-center'>
              <h3>Loading...</h3>
            </div>)} 
      </div>
      
      
    }
      
    </>
  )
  
}

export default ItemListContainer
