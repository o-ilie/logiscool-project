import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/*user routes - after login */}
          <Route path="/" element={<Dashboard />} />
        </Route>
        {/* public routes - before login */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
