
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from './pages/Register';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
