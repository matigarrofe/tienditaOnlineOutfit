import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'

const ItemDetailContainer = () => {
  const [pokemonList, setPokemonList] = useState([])
  
  const getItems = () => {
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then((response)=>{
      return response.json()
    }).then((data)=>{
        setPokemonList(data.results)
        return(data.results)
    }).then((lista)=>{
        return Promise.all(
          lista.map()
        )
    })
  }
  
  
  useEffect(()=> {
    getItems()
  },[])

  return (
    <>

      <ItemDetail listaDePokemons = {pokemonList}/>

    </>
  )
}

export default ItemDetailContainer