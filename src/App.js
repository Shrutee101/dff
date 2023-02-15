import logo from './logo.svg';
import './App.css';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Header Home="main"/>
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes> */}

    <Home/>
    



    </>
  );
}

export default App;
