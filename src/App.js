import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Products from './components/Products/Products';
import EventListener from './components/EventListener/EventListener';
import Burbujeo from './components/Burbujeo/Burbujeo';


function App() {
  return (
<BrowserRouter>

    <div>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='EntregaCoder'/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<ItemListContainer/>}/>
        <Route path='/products/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        {/* <Route path='/event-listener' element={<EventListener/>}/> */}
        {/* <Route path='/burbujeo' element={<Burbujeo/>}/> */}
       
        

      </Routes>
      
        
       
    </div>
    </BrowserRouter>
  );
}

export default App;


//  <ul>
//  <ItemListContainer nombre='Productos mas relevantes' url={'/'} />
//  <ItemListContainer nombre='Productos mas vendidos' url={'/'} />
//  <ItemListContainer nombre='Productos de outlet' url={'/'} />
//  <ItemListContainer nombre='Promociones' url={'/'} />
// </ul>