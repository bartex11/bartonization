import React, {Component} from 'react';
import {withNamespaces} from 'react-i18next';
import {HashRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import {
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'mdbreact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import Collapse from './components/Collapse';
import Icon from './components/Fa';
import Routes from './Routes';
import DefaultTheme from './DefaultTheme';

import './index.scss';

const SocialIcon = styled (Icon)`

`;

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      collapseID: '',
      value: 'en',
    };
  }
  componentDidMount () {
    document.title = 'Bartonization';
  }

  toggleCollapse = collapseID => () =>
    this.setState (prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState ({collapseID: ''});

  render () {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{backgroundColor: 'transparent'}}
        onClick={this.toggleCollapse ('mainNavbarCollapse')}
      />
    );
    const {t, i18n} = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage (lng);
    };

    return (
      <Router>
        <div>
          <div className="flyout">
            <Navbar
              color="indigo"
              dark
              expand="lg"
              fixed="top"
              double
              scrolling
            >
              <NavbarBrand href="/">
                <img
                  src="./images/bart-simpson-picture-png-image-723.png"
                  alt=""
                  height="40"
                  style={{marginRight: '10px'}}
                />
                {t ('Brand')}
              </NavbarBrand>
              <NavbarToggler
                onClick={this.toggleCollapse ('mainNavbarCollapse')}
              />
              <Collapse
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <NavbarNav>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/"
                      exact
                    >
                      {t ('Home')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/story"
                    >
                      {t ('About')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/portfolio"
                    >
                      {t ('Portfolio')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/resume"
                    >
                      {t ('Resume')}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/contact"
                    >
                      {t ('Contact')}
                    </NavLink>
                  </NavItem>

                  {/* <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/askora"
                    >
                      Askora
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/css"
                    >
                      CSS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/components"
                    >
                      Components
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/advanced"
                    >
                      Advanced
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/navigation"
                    >
                      Navigation
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/forms"
                    >
                      Forms
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/tables"
                    >
                      Tables
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/modals"
                    >
                      Modals
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/addons"
                    >
                      Addons
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/homeOld"
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                    >
                      HomeOld
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/background"
                    >
                      BgImage
                    </NavLink>
                  </NavItem> */}

                </NavbarNav>

              </Collapse>
              <NavbarNav right>
                <div className="language-change">
                  <button onClick={() => changeLanguage ('de')}>de</button>
                  <button onClick={() => changeLanguage ('en')}>en</button>
                  <button onClick={() => changeLanguage ('bg')}>bg</button>
                </div>
              </NavbarNav>
            </Navbar>
            {this.state.collapseID && overlay}
            <ThemeProvider theme={DefaultTheme}>
              <main className="content">
                <Routes />
              </main>
            </ThemeProvider>

            <Footer className="text-center">
              <Container className="text-center footer-links-container">
                <Row>
                  <Col md="4">
                    <h5 className="title">Bartonization</h5>
                    <ul>
                      <li className="list-unstyled">
                        <a href="#!">Home</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!">About</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!">Contact</a>
                      </li>
                      <li className="list-unstyled">
                        <a href="#!">Resume</a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="4">
                    <h5 className="title">GET IN TOUCH</h5>
                    <ul class="footer-social">
                      <li class="footer-xing">
                        <a
                          href="https://www.xing.com/profile/Ivan_Vasilev19"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon icon="xing" size="3x" />
                        </a>
                      </li>
                      <li class="footer-linkedin">
                        <a
                          href="linkedin.com/in/bartonization"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon icon="linkedin" size="3x" />
                        </a>
                      </li>
                      <li class="footer-github">
                        <a
                          href="https://github.com/bartex11"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SocialIcon icon="github" size="3x" />
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md="4">
                    <h5 className="title">Language</h5>
                    <div className="language-change">
                      <button onClick={() => changeLanguage ('de')}>de</button>
                      <button onClick={() => changeLanguage ('en')}>en</button>
                      <button onClick={() => changeLanguage ('bg')}>bg</button>
                    </div>
                    <h5 className="title">GET IN TOUCH</h5>
                    <div className="language-change">
                      <button>Social</button>
                      <button>Social</button>
                      <button>Social</button>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="footer-copyright text-center ">
                <p>
                  &copy; {new Date ().getFullYear ()} Copyright:{' '}
                  <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                </p>
              </div>
            </Footer>

          </div>
        </div>
      </Router>
    );
  }
}

export default withNamespaces () (App);
