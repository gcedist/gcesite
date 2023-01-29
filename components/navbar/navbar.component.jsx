import React from 'react';
import './navbar.styles.css';


// Link para outras rotas
import { Link, withRouter } from 'react-router-dom';  // Usar para evitar refresh ao mudar de rota (testar usar NavLink)

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

 
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  // Stylesheet
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Logo
import { ReactComponent as MainLogo } from '../../logo.svg';



const NavBar = ({location}) => (
    <Container fluid className="p-0 fixed-top">
    <Navbar className="navbar nav-font" collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand to="/" as={Link} id="nav-brand">
        <MainLogo id="main-logo" />
        <span id="main-nav-title">Saúde Materno-Infantil</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Início</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" active={location.pathname === '/about'} eventKey="link-1">Sobre</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/estatisticas" active={location.pathname === '/estatisticas'} eventKey="link-1">Estatísticas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/painelInterativo" active={location.pathname === '/painelInterativo'} eventKey="link-1">Pesquisas</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav id="github-nav">
          <Nav.Link href="#github">GitHub <FontAwesomeIcon icon={faGithub} size="lg" /></Nav.Link>
          <Nav.Link href="https://app.powerbi.com/view?r=eyJrIjoiMTljYmYwYTgtYzg1NC00MDllLWIxMzEtNDBiMDBhNWExMDgwIiwidCI6Ijc5ZjZiNjM5LWFiMTItNDI4MC04MDc3LWJkYmVlZjg2OWIzMyIsImMiOjR9&pageName=ReportSectione69d92465ffc48fe980b"target="_blank"  >Painel 
          <FontAwesomeIcon icon={faChartBar}  size = "lg" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default withRouter(NavBar);