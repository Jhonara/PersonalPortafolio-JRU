import React from 'react'
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from 'styled-components'
import { DiCssdeck } from "react-icons/di"
import { FaBars } from 'react-icons/fa';


const Nav = styled.div`
      background-color: ${({ theme }) => theme.card_light};
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      position: sticky;
      top: 0;
      z-index: 10;
      @media (max-width: 960px) {
          trastion: 0.8s all ease;
      }
  `;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
}
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  cursor: pointer;
  height: 70%;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.6s ease-in-out;
    :hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`;

const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;



const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={handleMenuToggle} aria-label="Toggle Menu" />
        </MobileIcon>
        <NavItems>
          <NavLink href="#perfil">Perfil</NavLink>
          <NavLink href="#habilidades">Habilidades</NavLink>
          <NavLink href="#experiencia">Experiencia</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#educacion">Educación</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>Perfil GitHub</GitHubButton>
        </ButtonContainer>
      </NavContainer>
      <MobileMenu isOpen={isOpen}> 
        {["perfil", "habilidades", "experiencia", "proyectos", "educacion"].map(
          (section) => (
            <MobileMenuLink
              key={section}
              href={`#${section}`}
              onClick={handleMenuToggle}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </MobileMenuLink>
          )
        )}
        <GitHubButton
          style={{
            padding: "10px 16px",
            background: theme.primary,
            color: "white",
            width: "max-content",
          }}
          href="/"
          target="_blank"
        >
          GitHub Profile
        </GitHubButton>
      </MobileMenu>
    </Nav>
  );
};

export default NavBar;