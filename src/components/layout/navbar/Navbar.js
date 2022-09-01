import { Link } from "react-router-dom"

import Container from "../container/Container"

import LogoCost from "../logoCost/LogoCost"

import style from './Navbar.module.css'

function Navbar(){
  return(
    <nav className={style.navbar}>
      <Container>
        <Link to="/">
          <LogoCost />
        </Link>
        <ul className={style.list}>
          <li className={style.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={style.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={style.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={style.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
