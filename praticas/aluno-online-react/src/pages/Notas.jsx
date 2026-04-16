import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./Notas.css";
import "../components/Layout.css";

function Notas() {
  return (
    <main className="layout">
      <Sidebar />
      <section className="main">
        <Header />
        <section className="content">
          <h2>Notas</h2>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td>7.8</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>7.5</td>
              </tr>
              <tr>
                <td>Backend</td>
                <td>8.0</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}

export default Notas;