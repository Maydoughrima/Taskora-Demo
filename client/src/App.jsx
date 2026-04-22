import { Routes, Route, Navigate } from "react-router-dom";

/* Layout */
import AppLayout from "./layouts/AppLayout";
import DashboardLayouts from "./layouts/DashboardLayouts";
import MyTasksLayout from "./layouts/MyTasksLayout";
import CalendarLayout from "./layouts/CalendarLayout";
import ClientsListLayout from "./layouts/ClientsListLayout"
import ProjectsListLayout from "./layouts/ProjectsListLayout";
import InvoiceListLayout from "./layouts/InvoiceListLayout";

/* Pages */
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/app/Dashboard";
import Products from "./pages/app/Products";
import MyTasks from "./pages/app/MyTasks";
import Calendar from "./pages/app/Calendar";
import ClientList from "./pages/app/ClientList";
import ProjectsList from "./pages/app/ProjectsList";
import InvoiceList from "./pages/app/InvoiceList";

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
      
      <Route element = {<ClientsListLayout/>}>
       {/* Optional Pages */}
        <Route path="/clientlist" element={<ClientList/>} />
      </Route>

      <Route element = {<ProjectsListLayout/>}>
       {/* Optional Pages */}
        <Route path="/projectslist" element={<ProjectsList/>} />
      </Route>

      <Route element = {<InvoiceListLayout/>}>
       {/* Optional Pages */}
        <Route path="/invoicelist" element={<InvoiceList/>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;