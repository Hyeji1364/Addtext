import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderBody from "./components/Headerbody";
import Footer from "./components/Footer";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeaderBody />
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
