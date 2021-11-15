import Movie from "./components/Movie";
import "./App.css";
import { useEffect, useState } from "react";
import { Platform, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Home from "./Home"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" 
import Favoritar from "./Favoritar";
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favoritos" element={<Favoritar/>}/>
      </Routes>
    </div>
  );
}

export default App;