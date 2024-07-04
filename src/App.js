import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderBody from "./components/Headerbody";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeaderBody />
        <Routes>
          <Route exact path="/" element={<Page1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
