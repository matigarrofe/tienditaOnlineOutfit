import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting='EntregaCoder'/>
        
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