import React from 'react';
import './footer.styles.css'

// Link para outras rotas
import { Link } from 'react-router-dom'  // Usar para evitar refresh ao mudar de rota

// FontAwesome Icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';  // Stylesheet
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Imagens
import CeeeLogo from '../../img/parceiros/ceee.jpg'
import GATESLogo from '../../img/parceiros/gates-foundation-wide.jpg'
import CONFAPLogo from '../../img/parceiros/confap.png'
import CNPQLogo from '../../img/parceiros/cnpq.svg'
import DISQSAUDELogo from '../../img/parceiros/disque-saude-wide.png'
import SUSLogo from '../../img/parceiros/sus.png'
import MINISTERIOLogo from '../../img/parceiros/ministerio-da-saude-wide.png'
import GOVERNOLogo from '../../img/parceiros/patria-amada-brasil.png'
import PCDASLogo from '../../img/parceiros/pcdas.jpg'
import FIOCRUZLogo from '../../img/parceiros/fiocruz-wide.png'




const Footer = props => (
    <div className="font-small top-border footer-container">
        <Container fluid className="footer-top text-center text-md-left">
            <Container>
                <Row className="text-center pt-5">
                    <Col md="12">
                        <h4 id="footer-title">Parceiros</h4>
                    </Col>
                </Row>

                <Row className="text-center">
                    <Col md="12">
                        <a href="https://c3e.fgv.br/" target="_blank" rel="noreferrer">
                            <img src={CeeeLogo} alt="EPGELogo" className="footer-logo" />
                        </a>
                        <a href="https://www.gatesfoundation.org/" target="_blank" rel="noreferrer">
                            <img src={GATESLogo} alt="GATESLogo" className="footer-logo" />
                        </a>
                        <a href="https://confap.org.br/" target="_blank" rel="noreferrer">
                            <img src={CONFAPLogo} alt="CONFAPLogo" className="footer-logo" />
                        </a>
                        <a href="https://www.gov.br/cnpq/pt-br" target="_blank" rel="noreferrer">
                            <img src={CNPQLogo} alt="CNPQLogo" className="footer-logo" />
                        </a>
                        <a href="https://bigdata.icict.fiocruz.br/" target="_blank" rel="noreferrer">
                            <img src={PCDASLogo} alt="PCDASLogo" id="PCDASLogo-footer" className="footer-logo"/>
                        </a>
                        <a href="https://portal.fiocruz.br/" target="_blank" rel="noreferrer">
                            <img src={FIOCRUZLogo} alt="FIOCRUZLogo" className="footer-logo" />
                        </a>
                        <a href="https://www.gov.br/anvisa/pt-br/assuntos/tabaco/disque-saude" target="_blank" rel="noreferrer">
                            <img src={DISQSAUDELogo} alt="DISQSAUDELogo" className="footer-logo" />
                        </a>
                        <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z-1/s/sistema-unico-de-saude-sus-estrutura-principios-e-como-funciona"
                            target="_blank" rel="noreferrer">
                            <img src={SUSLogo} alt="SUSLogo" className="footer-logo" />
                        </a>
                        <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noreferrer">
                            <img src={MINISTERIOLogo} alt="MINISTERIOLogo" className="footer-logo" />
                        </a>
                        <a href="https://www.gov.br/pt-br" target="_blank" rel="noreferrer">
                            <img src={GOVERNOLogo} alt="GOVERNOLogo" className="footer-logo" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>

        <Container fluid className="footer-copyright text-center py-3">
            <ul className="inline-list">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/estatisticas">Estatísticas</Link></li>
                <li><Link to="/painelInterativo">Pesquisas</Link></li>
            </ul>
            <div className="copyright-text">
                &copy; Copyright {new Date().getFullYear()}: <a href="http://#" rel="noreferrer" target="_blank"> inserir link do responsável</a>
            </div>
        </Container>
    </div >
);


export default Footer;