import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SingUp";
import About from "./pages/About";
import Panier from "./pages/Panier";
import RestaurantDetails from "./components/RestaurantDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Panier" element={<Panier/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SingUp" element={<SingUp/>}/>
        <Route path="/RestaurantDetails/:id" element={<RestaurantDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}