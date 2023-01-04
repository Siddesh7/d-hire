import Room from "./components/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Room />}></Route>
        <Route path="/:wallet" element={<Room />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
