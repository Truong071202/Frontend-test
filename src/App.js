import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/Frontend-test" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
