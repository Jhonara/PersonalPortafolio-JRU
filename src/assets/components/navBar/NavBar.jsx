import React from 'react'
import { Nav, NavLink } from "react-router-dom"
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Nav>
    <NavContainer>
      <NavLogo>Logo</NavLogo>
      <MobileIcon></MobileIcon>
      <NavItems>
        <NavLink>Inicio</NavLink>
      </NavItems>
      <ButtonContainer>
        <GithubButton>Github Perfil</GithubButton>
      </ButtonContainer>
    </NavContainer>
    </Nav>
  )
}

export default NavBar