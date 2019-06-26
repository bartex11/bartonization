import React, {Component} from 'react';
import {withNamespaces} from 'react-i18next';
import {HashRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink,
} from 'mdbreact';

import Navbar from './components/Navbar';
import './index.scss';
import theme from './theme';
import Routes from './Routes';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      collapseID: '',
      value: 'en',
    };
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
                {' '}
                Bartex React
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
                      exact
                      to="/"
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/bartonization"
                    >
                      Bart
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/story"
                    >
                      Story
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/test"
                    >
                      Test
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/tabs"
                    >
                      Tabs
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
                      onClick={this.closeCollapse ('mainNavbarCollapse')}
                      to="/background"
                    >
                      BgImage
                    </NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Navbar>
            {this.state.collapseID && overlay}
            <ThemeProvider theme={theme}>
              <main className="content">
                <Routes />
              </main>
            </ThemeProvider>
            <Footer>
              <p className="footer-copyright mb-0 py-3 text-center">
                &copy; 2016 Copyright:{' '}
                <a
                  href="http://www.bartonization.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./images/bart-simpson-picture-png-image-723.png"
                    alt=""
                    height="50"
                    style={{marginRight: '10px'}}
                  />
                  Bartonization{' '}
                </a>

              </p>
              <div className="language-change">
                <button onClick={() => changeLanguage ('de')}>de</button>
                <button onClick={() => changeLanguage ('en')}>en</button>
              </div>

            </Footer>
          </div>

        </div>

      </Router>
    );
  }
}

export default withNamespaces () (App);
