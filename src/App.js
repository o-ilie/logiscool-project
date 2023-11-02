import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, LoginPage, Sessions } from "./pages";
import { Layout } from "./components";
import { pages } from "./data";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {/*user routes - after login */}
            <Route path={pages.dashboard.route} element={<Dashboard />} />
            <Route path={pages.sessions.route} element={<Sessions />} />
          </Route>
          {/* public routes - before login */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
