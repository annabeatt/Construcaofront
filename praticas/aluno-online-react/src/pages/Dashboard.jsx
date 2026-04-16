import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Dashboard.css";
import "../components/Layout.css";

function Dashboard() {
  return (
    <main className="layout">
      <Sidebar />
      <section className="main">
        <Header />
        <section className="content">
          <h2>Dashboard</h2>
          <section className="cards">
            <article className="card">Faltas: 4</article>
            <article className="card">Média: 7.2</article>
            <article className="card">Boletos: 1</article>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;