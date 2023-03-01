import logo from './logo.svg';
import './App.css';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import { HeaderT } from './components/HeaderT';

import { useNavbar } from './hooqs/useNavbar';



function App() {
  
  const {isNavbar} =useNavbar();
  console.log(isNavbar)
  return (
    <>
    
      {/* <HeaderT changeNav={isNavbar}/> */}
      

    
    <Header/>
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes> */}
    
    <Home/>
    
    <Footer/>


    </>
  );
}

export default App;
