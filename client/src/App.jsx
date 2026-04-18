import { Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import AppLayout from "./layouts/AppLayout";
import DashboardLayouts from "./layouts/DashboardLayouts";
import MyTasksLayout from "./layouts/MyTasksLayout";
import CalendarLayout from "./layouts/CalendarLayout";

/* Pages */
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/app/Dashboard";
import Products from "./pages/app/Products";
import MyTasks from "./pages/app/MyTasks";
import Calendar from "./pages/app/Calendar";

function App() {
  return (
    <Routes>

      {/* MAIN SITE LAYOUT */}
      <Route element={<AppLayout />}>

        {/* Landing Page (Home) */}
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route element = {<DashboardLayouts/>}>
       {/* Optional Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} /> 
      </Route>

      <Route element = {<MyTasksLayout/>}>
       {/* Optional Pages */}
        <Route path="/myTasks" element={<MyTasks/>} />
      </Route>

      <Route element = {<CalendarLayout/>}>
       {/* Optional Pages */}
        <Route path="/calendar" element={<Calendar/>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;