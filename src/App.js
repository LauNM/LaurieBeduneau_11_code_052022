import './assets/css/style.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import React, {useState, useEffect} from "react";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('logements.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
       setItems(data)
      });
  }, [])


  return (
    <div className={"App"}>
      <Routes>
        <Route path="" element={<Home data={items}/>}/>
        <Route path="/lodging" element={<Lodging/>}/>
        <Route path="/about" element={<About/>}/>
        <Route element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
