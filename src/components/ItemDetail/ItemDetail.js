import ItemTwo from '../ItemTwo/ItemTwo'

const ItemDetail = ({listaDePokemons}) => {
  console.log(listaDePokemons)
  return (
    <>

      {
        listaDePokemons.map(pokemon => (
          
          <ItemTwo key={pokemon.name} nombre={pokemon.name}  URL={pokemon.url}/>
        )) 
      }

    </>
  )
}

export default ItemDetail