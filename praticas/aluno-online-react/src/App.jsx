import { Routes, Route } from 'react-router'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import Faltas from './pages/Faltas/Faltas'
import Notas from './pages/Notas/Notas'
import Boletos from './pages/Boletos/Boletos'
import Requerimentos from './pages/Requerimentos/Requerimentos'
import Login from './pages/Login/Login'
import RequerimentoForm from './pages/Requerimentos/RequerimentoForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
        <Route path="requerimentos/novo" element={<RequerimentoForm />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App