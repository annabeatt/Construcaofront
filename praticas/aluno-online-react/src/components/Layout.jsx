import Sidebar from "./Sidebar";
import Header from " ./Header";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />
      </div>
    </div>
  );
}

export default Layout;