import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBell} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting='EntregaCoder'/>
        <ItemDetailContainer />
        {/* <FontAwesomeIcon icon={faBell} />  Aun sin mostrarse */}
        
    </div>
  );
}

export default App;


//  <ul>
//  <ItemListContainer nombre='Productos mas relevantes' url={'/'} />
//  <ItemListContainer nombre='Productos mas vendidos' url={'/'} />
//  <ItemListContainer nombre='Productos de outlet' url={'/'} />
//  <ItemListContainer nombre='Promociones' url={'/'} />
// </ul>