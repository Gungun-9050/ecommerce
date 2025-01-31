import Navbar from './components/navbar/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import ShopCategory from './pages/ShopCategory'
import Product from './Pages/Product.jsx'
import Login from './Pages/LoginSignup'
import Footer from './components/Footer/Footer.jsx'
import banner_kids from './components/Assets/banner_kids.png'
import banner_mens from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'

function App() {

  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Shop/>}/>
      <Route path='/men' element= {<ShopCategory banner={banner_mens} category="men" />}/>
      <Route path='/women' element= {<ShopCategory banner={banner_women} category="women"/>}/>
      <Route path='/kids' element= {<ShopCategory  banner={banner_kids} category="kid"/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/product' element= {<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/' element= {<Shop/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>

   </div>
  )
}

export default App

// tum women wale pagepe thi or work shop wale pe ker rhi thi orkuch nopeokokokok