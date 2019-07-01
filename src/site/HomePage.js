import React from 'react';
import {Link} from 'react-router-dom';

import './HomePage.css';
import View from '../components/View';
import Mask from '../components/Mask';
import Container from '../components/Container';
import Row from '../components/Row';
import Button from '../components/Button';
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from 'mdbreact';

class HomePage extends React.Component {
  render () {
    const projects = [
      {
        id: 1,
        imgSrc: './images/Askora/1.jpg',
        title: 'Translation',
        name: 'Askora',
        button: 'Learn more >>',
        link: '/askora',
      },
      {
        id: 2,
        imgSrc: './images/KK/1-3.jpg',
        title: 'Kosmetikstudio',
        name: 'Katerina',
        button: 'Learn more >>',
        link: '/katerina',
      },
      {
        id: 1,
        imgSrc: './images/NN/1.png',
        title: 'Dentist',
        name: ' Chlosta',
        button: 'Learn more >>',
        link: '/chlosta',
      },
    ];

    const project = projects.map (project => (
      <MDBCol md="4" xl="4" className="mb-5" key={projects.id}>
        <MDBView className="overlay rounded z-depth-2" waves>
          <img src={project.imgSrc} alt="" className="img-fluid" />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <MDBCardBody className="pb-0">
          <a href="#!" className="green-text">
            <h5 className="font-weight-bold mt-2 mb-3">
              <MDBIcon icon="twitter" className="pr-2" />
              {project.title}
            </h5>
          </a>
          <h4 className="font-weight-bold mb-3">{project.name}</h4>

          <Link to={project.link}>
            <MDBBtn color="success" rounded>
              {project.button}
            </MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCol>
    ));

    return (
      <div id="background-image">
        <View className="index-image">
          <Mask
            className="d-flex justify-content-center align-items-center"
            overlay="grey-light"
          >
            <Container>
              <Row>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Hi, my name is Ivan{' '}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    I'm a Frontend Webdeveloper living in Düsseldorf.
                  </h6>
                  <Link to="/portfolio">
                    <Button color="white">Portfolio</Button>
                  </Link>
                  <Link to="/contact">
                    <Button outline color="white">
                      Contact me
                    </Button>
                  </Link>
                </div>

              </Row>
            </Container>
          </Mask>
        </View>

        <section className="text-center my-5 project-section">
          <h2 className="h1-responsive font-weight-bold my-5">
            Frelance projects
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Duisyaute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
          </p>
          <Container>
            <MDBRow className="d-flex justify-content-center">
              {project}
            </MDBRow>
          </Container>
        </section>

      </div>
    );
  }
}

export default HomePage;
