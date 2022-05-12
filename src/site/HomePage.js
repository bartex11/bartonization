import React from 'react';
import {Link} from 'react-router-dom';
import {withNamespaces} from 'react-i18next';

import View from '../components/View';
import Mask from '../components/Mask';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Button from '../components/Button';
import CardBody from '../components/CardBody';
import {MDBBtn, MDBView, MDBMask} from 'mdbreact';

import './HomePage.css';
class HomePage extends React.Component {
  componentDidMount () {
    document.title = 'Bartonization Home';
  }
  render () {
    const {t} = this.props;

    const projects = [
      {
        id: 1,
        imgSrc: './images/Askora/1.jpg',
        title: t ('Translation'),
        name: 'Askora',
        button: t ('More'),
        link: '/askora',
        color: "askora-color",
        url: "https://askora-bg.com/"
      },
      {
        id: 2,
        imgSrc: './images/KK/1-3.jpg',
        title: t ('Beauty'),
        name: 'Katerina',
        button: t ('More'),
        link: '/katerina',
        color: "katerina-color",
        url: "https://kosmetik-katerina.com/"
      },
      {
        id: 3,
        imgSrc: './images/NN/1.png',
        title: t ('Dentist'),
        name: ' Chlosta',
        button: t ('More'),
        link: '/chlosta',
        color: "closta-color",
        url: "https://zahnarztpraxis-chlosta.de/"
      },
      {
        id: 3,
        imgSrc: './images/De-Bg/1.jpg',
        title: 'Info portal',
        name: ' DE-BG',
        button: t ('More'),
        link: '/de-bg',
        color: "portal-color",
        url: "https://de-bg.com/index.html"
      }
    ];

    const project = projects.map (project => (
      <Col md="6" xl="6" className="mb-5" key={project.id}>
        <MDBView className="overlay rounded z-depth-2" waves>
          <img src={project.imgSrc} alt="" className="img-fluid" />
          <Link to={project.link}>
            <MDBMask overlay="white-slight" />
          </Link>
        </MDBView>
        <CardBody className="pb-0">
          <Link to={project.link} className={project.color}>
            <h5 className="font-weight-bold mt-2 mb-3">
              {project.title}
            </h5>
          </Link>
          <h4 className="font-weight-bold mb-3">{project.name}</h4>

          <Link to={project.link}>
            <MDBBtn color="indigo" rounded>
              {project.button}
            </MDBBtn>
          </Link>

          <a  href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-indigo btn-rounded"
            >
            Live              
          </a>

        </CardBody>
      </Col>
    ));

    return (
      <div className="home-container">
        <View className="index-image" src="./images/Me/vasilev.jpg">
          <Mask
            className="d-flex justify-content-center align-items-center"
            overlay="grey-light"
          >
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    {t ('Hi')}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    {t ('Duss')}
                  </h6>
                  <Link to="/portfolio">
                    <Button color="white">{t ('Portfolio')}</Button>
                  </Link>
                  <Link to="/contact">
                    <Button outline color="white">
                      {t ('ContactMe')}
                    </Button>
                  </Link>
                </div>

              </Row>
            </Container>
          </Mask>
        </View>

        <section className="text-center my-5 project-section">
          <h2 className="h1-responsive font-weight-bold my-5">
            {t ('Freelance')}
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          {t ('FreelanceIntro')}
          </p>
          <Container>
            <Row className="d-flex justify-content-center">
              {project}
            </Row>
          </Container>
        </section>

      </div>
    );
  }
}

export default withNamespaces () (HomePage);
