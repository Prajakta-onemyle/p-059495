import React from "react";
import Navbar from "@/components/layout/Navbar";
import DashboardContent from "@/components/dashboard/DashboardContent";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <DashboardContent />
      </main>
    </div>
  );
};

export default Index;
