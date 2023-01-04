import Room from "./components/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Room />}></Route>
        <Route path="/:wallet" element={<Room />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
