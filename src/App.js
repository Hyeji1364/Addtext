import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Header from "./components/Header";
import HeaderBody from "./components/Headerbody";
import Footer from "./components/Footer";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import LoginPage from "./pages/LoginPage";
import MakePage from "./pages/MakePage";

function App() {
  const location = useLocation();
  const showHeaderBody = !["/makepage", "/login"].includes(location.pathname);

  return (
    <>
      <Header />
      {showHeaderBody && <HeaderBody />}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/makepage" element={<MakePage />} />
      </Routes>
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
