import { NavLink } from 'react-router-dom'

export default function Menu() {
  const getClassName = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`

  return (
    <nav className="navbar" aria-label="Navegação principal">
      <div className="nav-inner">
        <NavLink to="/" className={getClassName}>Home</NavLink>
        <NavLink to="/sobre" className={getClassName}>Sobre</NavLink>
        <NavLink to="/contato" className={getClassName}>Contato</NavLink>
        <NavLink to="/produtos" className={getClassName}>Produtos</NavLink>
      </div>
    </nav>
  )
}
