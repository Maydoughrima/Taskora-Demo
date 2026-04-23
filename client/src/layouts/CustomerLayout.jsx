import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
