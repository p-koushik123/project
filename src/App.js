
import {Routes,Route} from 'react-router-dom';
import Login5 from './components/Login5';
import Home from './components/Home';
import Nav from './components/Nav';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';

import Accesories from './components/Accesories';
import { ThemeProvider } from './components/themeContext';
import BikeParts from './components/BikeParts'

function App() {
  return (
    <>
    <ThemeProvider>
    <Nav />
    <Routes>
      <Route path="/"  element={<Home />} /> 
      <Route path="login" element={<Login5 />} />
      <Route path="bikes" element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="spareparts" element={<BikeParts />} />
      <Route path="accesories" element={<Accesories />} />
   </Routes>
   </ThemeProvider>
  </>
  );
}

export default App;