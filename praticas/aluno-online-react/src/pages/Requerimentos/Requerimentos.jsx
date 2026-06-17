import "./Requerimentos.css";
import Tabela from "../../components/Tabela/Tabela";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { listarRequerimentos } from "../../pages/Requerimentos/RequerimenroService";

function Requerimentos() {
  const colunas = ["Tipo", "Data", "Status"];

  // ESTADO
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function carregarRequerimentos() {
      try {
        const resposta = await listarRequerimentos();

        const formatados = resposta.map((item) => ({
          tipo: item.tipo,
          data: item.data,
          status: item.status,
        }));

        setDados(formatados);
      } catch (error) {
        console.error(error);
      }
    }

    carregarRequerimentos();
  }, []);

return (
  <div className="requerimentos-page">
    <div className="page-header">
      <h1>Requerimentos</h1>
      <p>Solicitações acadêmicas</p>
    </div>

    <div className="info-cards">
      <div className="info-card">
        <h3>Total</h3>
        <span>{dados.length}</span>
      </div>
    </div>

    <div className="d-flex justify-content-between align-items-center mb-3">
      <Link
        to="/requerimentos/novo"
        className="btn btn-success"
      >
        ➕ Novo Requerimento
      </Link>
    </div>

    <div className="table-container">
      <Tabela
        titulos={colunas}
        dados={dados}
      />
    </div>
  </div>
);
}

export default Requerimentos;