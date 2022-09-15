import logotipo from './logotipo.png'
import './style.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div> 
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logotipo} alt="logotipo" id='logotipo'/> 
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>   
                    {/* <li className="nav-item dropdown">
                        <Link className="dropdown-menu" to="/products">Products</Link>
                        <ul>
                            <Link className="dropdown-item" to="/products/camisas">Camisas</Link>
                            <Link className="dropdown-item" to="/products/buzos">Buzos</Link>
                        </ul>
                    </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Products
                            </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/products/buzos">Buzos</Link></li>
                            <li><Link className="dropdown-item" to="/products/camisas">Camisas</Link></li>
                            <li><Link className="dropdown-item" to="/products/pantalones">Pantalones</Link></li>
                            <li><Link className="dropdown-item" to="/products/sacos">Sacos</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" tabindex="-1" aria-disabled="true">About</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/event-listener" tabindex="-1" aria-disabled="true">Event Listener</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/burbujeo">Cart</Link>
                    </li> */}
                    <li className="nav-item">
                        <a className='nav-link' href='https://freefrontend.com/' target='blank'>Page external</a>
                    </li>
                </ul>
            
        </div>
        </div>
    </nav>
    </div>
  )
}

export default NavBar
