import React, {Component} from 'react';
import {
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink,
} from 'mdbreact';
import {translate, Trans} from 'react-i18next';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Navbar from './components/Navbar';
import {HashRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import './index.scss';
import theme from './theme';
import Routes from './Routes';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
  container: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topgrid: {
    marginTop: '10px',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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

  handleChange = event => {
    console.log ('selected val is ', event.target.value);
    let newlang = event.target.value;
    this.setState (prevState => ({value: newlang}));
    console.log ('state value is', newlang);
    this.props.i18n.changeLanguage (newlang);
  };

  render () {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{backgroundColor: 'transparent'}}
        onClick={this.toggleCollapse ('mainNavbarCollapse')}
      />
    );
    const {t, i18n} = this.props;
    const {classes} = this.props;
    return (
      <Router>
        <div>
          <Grid item xs={12} className={classes.topgrid}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Select Language</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="en"
                      control={<Radio />}
                      label="English"
                    />
                    <FormControlLabel
                      value="ger"
                      control={<Radio />}
                      label="German"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Paper>
          </Grid>
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
                  src="/images/bart-simpson-picture-png-image-723.png"
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
                    src="/images/bart-simpson-picture-png-image-723.png"
                    alt=""
                    height="50"
                    style={{marginRight: '10px'}}
                  />
                  Bartonization{' '}
                </a>
              </p>
            </Footer>
          </div>

        </div>

      </Router>
    );
  }
}

export default withStyles (styles) (translate ('translations') (App));
