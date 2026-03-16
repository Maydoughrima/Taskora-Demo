import { Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import AppLayout from "./layouts/AppLayout";

/* Pages */
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/app/Dashboard";

function App() {
  return (
    <Routes>

      {/* MAIN SITE LAYOUT */}
      <Route element={<AppLayout />}>

        {/* Landing Page (Home) */}
        <Route path="/" element={<LandingPage />} />

        {/* Optional Pages */}
        <Route path="/dashboard" element={<Dashboard />} />


      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;