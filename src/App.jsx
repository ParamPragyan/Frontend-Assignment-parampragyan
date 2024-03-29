import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Editor from "./pages/editor";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;