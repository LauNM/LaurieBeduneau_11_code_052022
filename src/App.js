import "./assets/sass/style.scss"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Location from "./components/Location/Location";

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      //try catch gestion d'erreur à tous les palliers
      const response = await fetch('/logements.json');
     
      if (response.ok) {
        const responseData = await response.json();
        setItems(responseData)
      } else {
        alert('nop')
      }
      setIsLoading(false);
    })()
  }, [])

  return (
    <div className={"App"}>
      <Navbar />
      {isLoading ? <div>Loading....</div> :  <Routes>
        <Route path="" element={<Home data={items} />} />
        <Route path="location/:id" element={<Location data={items}/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/404" element={<Error404/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>}
    </div>
  );
}

export default App;