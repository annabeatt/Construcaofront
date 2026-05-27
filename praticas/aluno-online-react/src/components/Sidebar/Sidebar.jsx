import { NavLink } from 'react-router'
import './Sidebar.css'
import { useAuthContext } from '../../hooks/useAuthContext'

function Sidebar() {
  const {logout}= useAuthContext();
  return (
    <aside className="sidebar">
      <h2>Aluno Online</h2>

      <nav>
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/faltas">
          Faltas
        </NavLink>

        <NavLink to="/notas">
          Notas
        </NavLink>

        <NavLink to="/boletos">
          Boletos
        </NavLink>

        <NavLink to="/requerimentos">
          Requerimentos
        </NavLink>
          <NavLink to="/login" onClick={logout}>
          Sair
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar