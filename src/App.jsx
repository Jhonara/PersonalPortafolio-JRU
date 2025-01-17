import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from "./assets/utils/Themes.js"
import NavBar from './assets/components/navBar/NavBar.jsx';
import HeroSection from './assets/components/heroSection/HeroSection.jsx';
import Skills from './assets/components/skills/Skills.jsx';
import Education from './assets/components/education/Education.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './assets/components/experience/Experience.jsx';
import Proyects from './assets/components/proyects/Proyects.jsx';
import Contact from './assets/components/contacto/Contact.jsx';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, 
    rgba(204, 0, 187, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%), 
  linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, 
  rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <NavBar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Proyects />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
          </Body>
        </Router>
      </ThemeProvider>

    </>

  )
}

export default App
