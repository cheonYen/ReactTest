import './css/App.css';
import './css/Reset.css';
import './css/Header.css'
import './css/Footer.css'
import './css/MainList.css'
import './css/AllList.css'
import './css/ListCard.css'

import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

/* 컴포넌트 */
import Header from './component/Header';
import Login from './component/Login';
import Main from './component/Main';
import Stationery from './component/Stationery';
import Fashion from './component/Fashion';
import Digital from './component/Digital';
import Living from './component/Living';
import Habit from './component/Habit';
import Happiermart from './component/Happiermart';
import Footer from './component/Footer';
import productData from './component/productData';


function App() {
  let [data] = useState(productData);
  
  return (
    <div className="wrap">
      <Header/>
      <Routes>
        <Route path="/" element={<Main data={data}/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Stationery" element={<Stationery data={data}/>}/>
        <Route path="/Fashion" element={<Fashion data={data}/>}/>
        <Route path="/Digital" element={<Digital data={data}/>}/>
        <Route path="/Living" element={<Living data={data}/>}/>
        <Route path="/Habit" element={<Habit data={data}/>}/>
        <Route path="/Happiermart" element={<Happiermart data={data}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
