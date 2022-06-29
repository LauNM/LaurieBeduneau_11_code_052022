import "./assets/sass/style.scss"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/logements.json');

        if (response.ok) {
          const responseData = await response.json();
          setItems(responseData)
        } else {
          alert('something went wrong')
        }
        setIsLoading(false);
      }
      catch(error) {
        console.log(error)
      }

    })()
  }, [])

  return (
    <div className={'App'}>
      <div className={'app-content'}>
        <Navbar/>
        {isLoading ? <Loading /> : <Routes>
          <Route path="" element={<Home data={items}/>}/>
          <Route path="location/:id" element={<Location data={items}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/404" element={<Error404/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;