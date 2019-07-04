import React, {Component} from 'react';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Container,
  Col,
  Row,
} from 'mdbreact';

import './projects.scss';

class AskoraPage extends Component {
  render () {
    const images = [
      {
        id: 1,
        imgSrc: './images/Askora/1.jpg',
        name: 'Askora Translation',
      },
      {
        id: 2,
        imgSrc: './images/Askora/2.jpg',
        name: 'Kosmetikstudio Katerina',
      },
      {
        id: 3,
        imgSrc: './images/Askora/3.jpg',
        name: 'Dentist Chlosta',
      },
      {
        id: 4,
        imgSrc: './images/Askora/4.jpg',
        name: 'Dentist Chlosta',
      },
    ];

    const image = images.map (project => (
      <CarouselItem itemId={project.id} key={project.id}>
        <View>
          <img
            className="d-block w-100"
            src={project.imgSrc}
            alt={project.name}
          />
        </View>

      </CarouselItem>
    ));
    return (
      <Container>
        <Row>
          <Col>
            <h4 className="mt-5 mb-2">Askora Page</h4>
            <Carousel
              activeItem={1}
              length={4}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <CarouselInner>
                {image}
              </CarouselInner>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 class="text-center">What i did</h1>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default AskoraPage;