import React from "react";
import Sidebar from "./../components/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50 overflow-auto">
            {children}
        </div>
        </div>
    );
}
