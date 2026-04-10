import Tabela from "../components/Tabela";


function Faltas() {
    return <Layout 
    titulo="Minhas Faltas" 
    subtitulo="Histórico de faltas por semestre"
    >
        <Tabela />
        <Tabela />
        <Tabela />
    </Layout>
}

export default Faltas;

