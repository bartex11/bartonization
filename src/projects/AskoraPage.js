import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, View, Container, Col, Row, Card, CardBody, CardTitle, CardText, CardImage } from 'mdbreact';
import Flip from '../components/Flip';
import './projects.scss';
import Data from '../data/Data';

class AskoraPage extends Component {
  componentDidMount() {
    document.title = 'Askora';
    window.scrollTo(0, 0);
  }

  state = {
    Index: 0,
    data: Data,
  };
  renderTools = (projects) => {
    let Index = -1;

    return projects.map((project) => {
      Index++;

      return (
        <Col xs="12" sm="12" md="4" lg="4" className="mb-4" key={Index}>
          <Card>
            <CardImage className="img-fluid" src={project.imgSrc} alt={project.name} style={{ margin: '20px auto', height: '120px' }} waves />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardText>{project.description}</CardText>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  renderCarousel = (images) => {
    let Index = -1;

    return images.map((image) => {
      Index++;

      return (
        <CarouselItem itemId={image.id} key={Index}>
          <View>
            <img className="d-block w-100" src={image.imgSrc} alt={image.name} />
          </View>
        </CarouselItem>
      );
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h4 className="mt-5 mb-2">Askora Page</h4>
              <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>{this.renderCarousel(data.imagesAskora)}</CarouselInner>
              </Carousel>
            </Col>
          </Row>
          <h1 class="text-center">What i did</h1>
          <Row>{this.renderTools(data.tools)}</Row>
        </Container>
        <Container>
          <Row>
            <Col xs="12" sm="12" md="12" lg="4">
              <Flip src="./images/Tools/HTML.png" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AskoraPage;
