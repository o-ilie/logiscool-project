import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "./pages";
import Layout from "./components/Layout";
import { pages } from "./data";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/*user routes - after login */}
          <Route path={pages.dashboard.route} element={<Dashboard />} />
        </Route>
        {/* public routes - before login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
