

import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
         <BrowserRouter>
      <Routes>
      {/* <Route path="" element={} />
      <Route path="" element={} />  */}
        <Route path="/technology" element={<News pageSize = {6} country = "us" category="technology" />}/>
          <Route path="/sports" element={<News pageSize = {6} country = "us" category="sports" />} />
          <Route path="/health" element={<News pageSize = {6} country = "us" category="health" />} />
          <Route path="general" element={<News pageSize = {6} country = "us" category="general" />} />
          <Route path="/science" element={<News pageSize = {6} country = "us" category="science" />} />
          <Route path="/entertainment" element={<News pageSize = {6} country = "us" category="entertainment" />} />
          <Route path="/business" element={<News pageSize = {6} country = "us" category="business" />} />

       
      </Routes>
    </BrowserRouter> 

        
      </div>
    )
  }
}
