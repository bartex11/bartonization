import React, {Component} from 'react';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImage,
} from 'mdbreact';

import './projects.scss';

class AskoraPage extends Component {
  componentDidMount () {
    document.title = 'Askora';
    window.scrollTo (0, 0);
  }

  state = {
    photoIndex: 0,
    tools: [
      {
        name: 'HTML',
        imgSrc: './images/Tools/HTML.png',
        description: 'HTML description',
      },
      {
        name: 'CSS',
        imgSrc: './images/Tools/CSS.png',
        description: 'CSS description',
      },
      {
        name: 'JS',
        imgSrc: './images/Tools/JS.png',
        description: 'Javascript description',
      },
    ],
  };
  renderImages = projects => {
    let photoIndex = -1;

    return projects.map (project => {
      photoIndex++;

      return (
        <Col size="4" className="mb-4" key={photoIndex}>
          <Card>
            <CardImage
              className="img-fluid"
              src={project.imgSrc}
              alt={project.name}
              style={{margin: '20px auto', height: '120px'}}
              waves
            />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardText>
                {project.description}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  render () {
    const {tools} = this.state;
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
        <h1 class="text-center">What i did</h1>
        <Row>

          {this.renderImages (tools)}

        </Row>
      </Container>
    );
  }
}

export default AskoraPage;
