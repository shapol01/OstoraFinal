import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Ostoralist from "./routes/Ostoralist";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Wallet_SetUp" element={<Service />} />
        <Route path="/Ostora_studio" element={<Contact />} />
        <Route path="/Ostoralist" element={<Ostoralist />} />
      </Routes>
    </div>
  );
}
