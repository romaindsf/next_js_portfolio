'use client'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Nav = styled.nav`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin-left: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  border-radius: 10px;
`
const NavLink = styled(Link)`
  font-size: 16px;
  cursor: pointer;

  &.active {
    color: blue;
  }
`
export default function Home() {
  return (
    <header>
      <Nav>
        <NavLink
          activeClass='active'
          to='accueil'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Accueil
        </NavLink>
        <NavLink
          activeClass='active'
          to='presentation'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Présentation
        </NavLink>
        <NavLink
          activeClass='active'
          to='realisation'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Réalisation
        </NavLink>
        <NavLink
          activeClass='active'
          to='activites'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Activités
        </NavLink>
        <NavLink
          activeClass='active'
          to='competences'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Compétences
        </NavLink>
        <NavLink
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </NavLink>
        <NavLink
          activeClass='active'
          to='cv'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          CV
        </NavLink>
      </Nav>
    </header>
  )
}
