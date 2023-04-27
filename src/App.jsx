import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Pages from "./pages/Pages";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/mofus/" element={<Home />} />
            <Route path="/mofus/manga/:title/:tomo" element={<Pages />} />
            <Route path="/mofus/manga/:title/*" element={<Page404 />} />
            <Route path="/mofus/*" element={<Page404 />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}
export default App;
