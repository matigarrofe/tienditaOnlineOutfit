const Item = ({id, nombre, desc, precio, img}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <div className="card">
                    <img src={img} alt={nombre} />
                    <div className="card-body">
                    <h4 className="card-title">{nombre}</h4>
                    <p className="card-text text-secondary">{desc}</p>
                    <p><strong>$ {precio}</strong></p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
    </div>
  )
}

export default Item

