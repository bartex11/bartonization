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
import {MDBIcon, MDBBtn, MDBView, MDBMask} from 'mdbreact';

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
      },
      {
        id: 2,
        imgSrc: './images/KK/1-3.jpg',
        title: t ('Beauty'),
        name: 'Katerina',
        button: t ('More'),
        link: '/katerina',
      },
      {
        id: 3,
        imgSrc: './images/NN/1.png',
        title: t ('Dentist'),
        name: ' Chlosta',
        button: t ('More'),
        link: '/chlosta',
      },
    ];

    const project = projects.map (project => (
      <Col md="4" xl="4" className="mb-5" key={project.id}>
        <MDBView className="overlay rounded z-depth-2" waves>
          <img src={project.imgSrc} alt="" className="img-fluid" />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <CardBody className="pb-0">
          <a href="#!" className="green-text">
            <h5 className="font-weight-bold mt-2 mb-3">
              <MDBIcon icon="twitter" className="pr-2" />
              {project.title}
            </h5>
          </a>
          <h4 className="font-weight-bold mb-3">{project.name}</h4>

          <Link to={project.link}>
            <MDBBtn color="indigo" rounded>
              {project.button}
            </MDBBtn>
          </Link>
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
            {t ('Frelance')}
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Duisyaute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
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
