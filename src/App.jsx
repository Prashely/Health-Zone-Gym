import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/HomePage";
import TeachersPage from "./page/TeachersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Routes>
    </Router>
  );
}
export default App;
