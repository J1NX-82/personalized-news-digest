import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
