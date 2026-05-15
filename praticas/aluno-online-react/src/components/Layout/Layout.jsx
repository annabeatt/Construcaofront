import { Navigate, Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";
import { useAuthContext } from "../../contexts/AuthContext";

function Layout() {
  const { logado } = useAuthContext();
  return (
    <>
      {logado ? (
        <div className="layout">
          <Sidebar />
          <main className="content">
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;
