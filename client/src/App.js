import logo from './logo.svg';
import Header from "./Pages/Hearder/Header";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./CartContext";
import NavBar from "./Pages/NavBar/NavBar";
import Footer from "./Pages/Footer/Footer";
import Products from "./Pages/Products/Products";
import AllProducts from "./Pages/AllProducts/AllProducts";
import NewProduct from "./Pages/NewProducts/NewProducts"
import ExampleProduct from "./Pages/ExampleProduct/ExampleProduct"
import ScrollingBanner from "./Pages/ScrollingBanner/ScrollingBanner"
import Grid from "./Pages/Grid/Grid"
import Blogs from "./Pages/Blogs/Blogs"
import ChooseUs from "./Pages/ChooseUs/ChooseUs"
import BlogDetails from "./Pages/BlogDetails/BlogDetails"
import BlogGrid from "./Pages/BlogGrid/BlogGrid"
import Contact from "./Pages/ContactUs/Contac"
import Location from "./Pages/Locations/Location"
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import Teams from "./Pages/Teams/Teams"
// Page d'accueil
function HomePage() {
  return (
    <>
      <div id="Header">
        <Header />
      </div>
      <Products />
         <ScrollingBanner  text="🎉 Promo spéciale cette semaine ! -25% sur tous les produits"/>
         <ExampleProduct/>
           <NewProduct/>
      <ScrollingBanner  text=" Nos packs spéciale "/>   
      <Grid/>
       <ChooseUs/>
   <Blogs/>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/blogs" element={<BlogGrid />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/Contact" element={<Contact />} />
             <Route path="/Location" element={<Location />} />
               <Route path="/Teams" element={<Teams />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
