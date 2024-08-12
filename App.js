import React, { createContext } from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/component/Home/Home';
import Comment from './component/Comment/Comment';
import NotFound from './component/NotFound/NotFound';
export const context = createContext();


function App() {


  
  return (
    <context.Provider >
      <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<Comment/>}/>
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
      </Router>
       
     
    </context.Provider>
  );
}

export default App;
