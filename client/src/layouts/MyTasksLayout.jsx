import Sidebar from "../components/Sidebar";
import NavMobile from "../components/MobileComponents/NavMobile";
import { Outlet } from "react-router-dom";

export default function MyTasksLayout() {
  return (
    <div className="h-screen bg-[var(--bg)]">
          {/* Desktop & Tablet Layout */}
          <div className="hidden lg:flex min-h-screen">
            {/* Sidebar with fixed width */}
            <Sidebar className="w-50" />
    
            {/* Main content fills remaining space */}
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
    
          {/* Mobile Layout */}
          <div className="flex flex-col lg:hidden min-h-screen">
            <NavMobile className="fixed"/>
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
  )
}
