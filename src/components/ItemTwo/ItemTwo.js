
const ItemTwo = ({nombre, url}) => {
  return (
    <>
    <div className="container">
    
      <div className="row">
      
        <div className="col-lg-4"></div>
        <div className="col-lg-4 bg-secondary text-center text-white"> 
          <h1>{nombre}</h1>
          <h2>{url}</h2>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
    </>
  )
}

export default ItemTwo