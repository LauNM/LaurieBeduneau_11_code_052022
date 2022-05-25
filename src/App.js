import './assets/css/style.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import About from "./pages/About";
import Error404 from "./components/Error404";


function App() {
  return (
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route element={<Error404 />} />
    </Routes>
  );
}

export default App;
