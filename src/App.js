import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import FontGallery from "./components/FontGallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FontGallery />} />
      {/* 다른 라우트들도 여기에 추가하세요 */}
    </Routes>
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
