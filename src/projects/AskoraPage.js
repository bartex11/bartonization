import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, View, Container, Col, Row } from 'mdbreact';
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

  renderFlip = (projects) => {
    let Index = -1;

    return projects.map((project) => {
      Index++;

      return (
        <Col xs="12" sm="12" md="12" lg="4" key={Index}>
          <Flip
            src={project.imgSrc}
            alt={project.name}
            btn={project.btn}
            header={project.name}
            subHeader={project.subName}
            description={project.description}
            footer={project.name}
          />
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
   
              <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1 mt-5">
                <CarouselInner>{this.renderCarousel(data.images.Askora)}</CarouselInner>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Container>
      
          <Row className="mt-5">{this.renderFlip(data.tools.Askora)}</Row>
        </Container>
      </div>
    );
  }
}

export default AskoraPage;
