import React, {Component} from 'react';

import {
  EdgeHeader,
  FreeBird,
  Col,
  Row,
  CardBody,
  Fa,
  Card,
  CardImage,
  CardTitle,
  CardText,
  Button,
  Container,
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  Animation,
  Iframe,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdbreact';

import './Lightbox.css';
import Lightbox from 'react-image-lightbox';

class TestPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg',
    ],
    name: [
      'Projekt 1',
      'Projekt 2',
      'Projekt 3',
      'Projekt 4',
      'Projekt 5',
      'Projekt 6',
      'Projekt 7',
      'Projekt 8',
    ],
  };
  renderImages = () => {
    let photoIndex = -1;
    const {images} = this.state;
    const {name} = this.state;

    return images.map (imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="3" key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid z-depth-1"
              onClick={() =>
                this.setState ({photoIndex: privateKey, isOpen: true})}
            />
            <p class="text-uppercase font-weight-bold blue-grey-text mt-4">
              {name[photoIndex]}
            </p>
          </figure>
        </MDBCol>
      );
    });
  };
  render () {
    const {photoIndex, isOpen, images} = this.state;
    return (
      <div>
        <EdgeHeader color="indigo darken-3" />
        <FreeBird>
          <Row>
            <Col
              md="10"
              className="mx-auto float-none white z-depth-1 py-2 px-2"
            >
              <CardBody>
                <h2 className="h2-responsive mb-4">
                  <strong>Bartex React Demo App</strong>
                </h2>
                <p>React Bootstrap with Material Design</p>
                <p className="pb-4">
                  This application shows the actual use of MDB React components
                  in the application.
                </p>
                <Row className="d-flex flex-row justify-content-center row">
                  <a
                    className="border nav-link border-light rounded mr-1"
                    href="http://www.bartonization.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Fa icon="legal" className="mr-2" />
                    Bartonization homepage
                  </a>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
        <MDBContainer style={{marginTop: '3rem'}}>
          <MDBCarousel
            activeItem={1}
            length={2}
            showControls
            showIndicators
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Others/documentation/img%20(137)-mini.jpg"
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                    alt="Third slide"
                  />
                  <MDBMask overlay="black-slight" />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
        <Container style={{marginTop: '3rem'}}>
          <Row>
            <Col>
              <Animation type="bounce">
                <Card reverse style={{width: '22rem'}}>
                  <CardImage
                    cascade
                    className="img-fluid"
                    src="http://bartonization.com/wp-content/uploads/2016/08/1.jpg"
                    waves
                  />
                  <CardBody cascade>
                    <CardTitle>Hier in Düsseldorf</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and make
                      up the bulk of the card&apos;s content.
                    </CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Animation>
            </Col>
          </Row>
          <Col style={{margin: '3rem auto'}}>
            <Row>
              <Iframe
                title="This is a Bartonization site"
                src="http://www.bartonization.com/"
              />
            </Row>
          </Col>

        </Container>

        <Container
          className="mt-5 p-3"
          style={{backgroundColor: '#fff', marginBottom: '50px'}}
        >
          <h2 class="h1 text-center text-uppercase font-weight-bold pt-5 mb-3 mt-5">
            My projects
          </h2>
          <p class="text-center text-uppercase font-weight-bold">
            All about my work
          </p>
          <p class="section-description mt-5 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
            amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
            pariatur accusamus veniam. At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium
            repellat eveniet quia vitae.
          </p>
          <div className="mdb-lightbox p-3">
            <MDBRow>
              {this.renderImages ()}
            </MDBRow>
          </div>
          {isOpen &&
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + '/' + images.length}
              onCloseRequest={() => this.setState ({isOpen: false})}
              onMovePrevRequest={() =>
                this.setState ({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })}
              onMoveNextRequest={() =>
                this.setState ({
                  photoIndex: (photoIndex + 1) % images.length,
                })}
            />}
          <MDBCol md="12" className="text-center py-4">
            <MDBBtn outline color="black"><strong>more</strong></MDBBtn>
          </MDBCol>
        </Container>
      </div>
    );
  }
}

export default TestPage;
