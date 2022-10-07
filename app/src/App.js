import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import Hotel from "./pages/hotel/Hotel";
import Hotel from "./pages/hotelDetails/hotelDetails";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Enquiry from "./components/enquiry/enquiry";
import ContactUs from "./components/contactMessages/contactMessages";
import About from "./pages/About/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotelDetails" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
