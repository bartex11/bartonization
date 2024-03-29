import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { HashRouter as Router, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
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

import DefaultTheme from './DefaultTheme';
import Routes from './Routes';
import ScrollToTop from './ScrollToTop';
import './index.scss';

const SocialIcon = styled(Icon)`

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: '',
      value: 'en',
    };
  }
  componentDidMount() {
    document.title = 'Bartonization';
    window.scrollTo(0, 0);
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: '' });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );
    const { t, i18n } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <Router>
        <ScrollToTop>
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
                  {t('Brand')}
                </NavbarBrand>
                <NavbarToggler
                  onClick={this.toggleCollapse('mainNavbarCollapse')}
                />
                <Collapse
                  id="mainNavbarCollapse"
                  isOpen={this.state.collapseID}
                  navbar
                >
                  <NavbarNav>
                    <NavItem>
                      <NavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to="/"
                        exact
                      >
                        {t('Home')}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to="/story"
                      >
                        {t('AboutMe')}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to="/portfolio"
                      >
                        {t('Portfolio')}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to="/resume"
                      >
                        {t('Resume')}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={this.closeCollapse('mainNavbarCollapse')}
                        to="/contact"
                      >
                        {t('Contact')}
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
                    <Col xs="12" sm="12" md="3" lg="3" className="footer-col">
                      <h5 className="title footer-col-title">Bartonization</h5>
                      <ul className="footer-list-links">
                        <li className="list-unstyled">
                          <Link to="/">{t('Home')}</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/story">{t('About')}</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/contact">{t('Contact')}</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/resume">{t('Resume')}</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col xs="12" sm="12" md="2" lg="3" className="footer-col">
                      <h5 className="title footer-col-title">
                        {t('Projects')}
                      </h5>
                      <ul className="footer-list-links">
                        <li className="list-unstyled">
                          <Link to="/askora">Askora</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/katerina">Katerina</Link>
                        </li>
                        <li className="list-unstyled">
                          <Link to="/chlosta">Chlosta</Link>
                        </li>

                      </ul>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="3" className="footer-col">
                      <h5 className="title footer-col-title">
                        {t('Social')}
                      </h5>
                      <ul className="footer-social">
                        <li className="footer-xing">
                          <a
                            href="https://www.xing.com/profile/Ivan_Vasilev19"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SocialIcon icon="xing" size="3x" />
                          </a>
                        </li>
                        <li className="footer-linkedin">
                          <a
                            href="https://www.linkedin.com/in/vasilev-ivan"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SocialIcon icon="linkedin" size="3x" />
                          </a>
                        </li>
                        <li className="footer-github">
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
                    <Col xs="12" sm="12" md="3" lg="3" className="footer-col">
                      <h5 className="title footer-col-title">
                        {t('Language')}
                      </h5>
                      <div className="language-change">
                        <span className="language-btn" onClick={() => changeLanguage('de')}>
                          <img
                            src="images/de.png"
                            alt="Smiley face"
                            height="42"
                            width="42"
                          />
                        </span>
                        <span className="language-btn" onClick={() => changeLanguage('en')}>
                          <img
                            src="images/uk.png"
                            alt="Smiley face"
                            height="42"
                            width="42"
                          />
                        </span>
                        <span className="language-btn" onClick={() => changeLanguage('bg')}>
                          <img
                            src="images/bg.png"
                            alt="Smiley face"
                            height="42"
                            width="42"
                          />
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <div className="footer-copy text-center ">
                  <p>
                    &copy;
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    Copyright:
                    {' '}
                    <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                  </p>
                </div>
              </Footer>
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default withNamespaces()(App);
