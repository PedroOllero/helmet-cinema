import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NowShowing from "./pages/NowShowing";
import ComingSoon from "./pages/ComingSoon";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="bg-black text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/now-showing" element={<NowShowing />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/booking/:id" element={<Booking />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
