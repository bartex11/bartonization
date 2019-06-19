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
} from 'mdbreact';

class TestPage extends Component {
  render () {
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
      </div>
    );
  }
}

export default TestPage;
