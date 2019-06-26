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
        imgSrc: 'https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg',
        title: 'Marketing',
        text: 'Welcome to learning React!',
        button: 'Button 1',
      },
      {
        id: 2,
        imgSrc: 'https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg',
        title: 'AAAAAAAAAAAAAAAAAAAA',
        text: 'Welcome to learning sss!',
        button: 'Button 2',
      },
      {
        id: 1,
        imgSrc: 'https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg',
        title: 'BBBBBB',
        text: 'Welcome to learning React!',
        button: 'Button 3',
      },
    ];

    const project = projects.map (project => (
      <MDBCol md="6" xl="5" className="mb-4" key={projects.id}>
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
          <h4 className="font-weight-bold mb-3">Title of the news</h4>
          <p>
            {project.text}
          </p>
          <MDBBtn color="success" rounded>
            {project.button}
          </MDBBtn>
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
            My projects
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Duisyaute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
          </p>

          <MDBRow className="d-flex justify-content-center">

            {project}

            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="blue-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon far icon="eye" className="pr-2" />
                    Entertainment
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit cupidatat proident
                  voluptatem quia numquam.
                </p>
                <MDBBtn color="success" rounded>
                  MDBView more
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="brown-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon icon="camera" className="pr-2" />
                    Travel
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit cupidatat proident
                  voluptatem quia numquam.
                </p>
                <MDBBtn color="success" rounded>
                  MDBView more
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <a href="#!" className="cyan-text">
                  <h5 className="font-weight-bold mt-2 mb-3">
                    <MDBIcon icon="phone" className="pr-2" />
                    Technology
                  </h5>
                </a>
                <h4 className="font-weight-bold mb-3">Title of the news</h4>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit cupidatat proident
                  voluptatem quia numquam.
                </p>
                <MDBBtn color="success" rounded>
                  MDBView more
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    );
  }
}

export default HomePage;
