import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardHeader,
  CardImage,
} from 'mdbreact';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import Head from '../components/PageHeading';

const ProjectImg = styled.div`

`;

class TestPage extends React.Component {
  componentDidMount () {
    document.title = 'Portfolio';
  }

  state = {
    photoIndex: 0,
    free: [
      {
        name: 'Askora',
        imgSrc: './images/Askora/1.jpg',
        link: '/askora',
      },
      {
        name: 'NN',
        imgSrc: './images/NN/1.png',
        link: '/askora',
      },
      {
        name: 'KK',
        imgSrc: './images/KK/1-3.jpg',
        link: '/askora',
      },
    ],
    spicy: [
      {
        name: 'FF',
        imgSrc: './images/FF/1.png',
        link: '/askora',
      },
      {
        name: 'Spa',
        imgSrc: './images/Spa/1.png',
        link: '/askora',
      },
      {
        name: 'Wash',
        imgSrc: './images/WROO/1.png',
        link: '/askora',
      },
    ],
  };
  renderImages = test => {
    let photoIndex = -1;

    return test.map (project => {
      photoIndex++;

      return (
        <Col md="4" className="mb-4" key={photoIndex}>
          <Card>
            <CardImage
              className="img-fluid"
              src={project.imgSrc}
              alt={project.name}
              waves
            />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardText>
                Projekt text
              </CardText>
              <Link to={project.link}>
                <Button color="success" rounded>
                  {project.name}
                </Button>
              </Link>
            </CardBody>
          </Card>

        </Col>
      );
    });
  };
  render () {
    const {free, spicy} = this.state;
    const {t} = this.props;

    return (
      <div>
        <Head title={t ('Portfolio')} />

        <Container className="resume-container resume-desktop">
          <Row>

            <Tabs style={{margin: '3rem 0'}}>
              <Col size="2" className="tabs-menu">
                <TabList>
                  <Tab><p>All</p></Tab>
                  <Tab><p>Free</p></Tab>
                  <Tab><p>Spicy</p></Tab>

                </TabList>
              </Col>
              <Col size="10" className="tabs-content">
                <TabPanel>
                  <Row>
                    <Col size="12">
                      <Card>
                        <CardHeader color="indigo lighten-1">
                          All
                        </CardHeader>
                        <CardBody>
                          <CardTitle>
                            Alll
                          </CardTitle>
                          <CardText style={{fontSize: '1.25rem'}}>
                            All text
                          </CardText>
                          <ProjectImg>
                            <div className="-lightbox p-3">
                              <Row>
                                {this.renderImages (spicy)}
                                {this.renderImages (free)}
                              </Row>
                            </div>
                          </ProjectImg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    <Col size="12">
                      <Card>
                        <CardHeader color="indigo lighten-1">
                          Freee
                        </CardHeader>
                        <CardBody>
                          <CardTitle>
                            Freeee
                          </CardTitle>
                          <CardText style={{fontSize: '1.25rem'}}>
                            Freee text
                          </CardText>
                          <ProjectImg>
                            <div className="-lightbox p-3">
                              <Row>
                                {this.renderImages (free)}
                              </Row>
                            </div>
                          </ProjectImg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    <Col size="12">
                      <Card>
                        <CardHeader color="indigo lighten-1">
                          Spicy
                        </CardHeader>
                        <CardBody>
                          <CardTitle>
                            Spicy
                          </CardTitle>
                          <CardText style={{fontSize: '1.25rem'}}>
                            Spicy text
                          </CardText>
                          <ProjectImg>
                            <div className="-lightbox p-3">
                              <Row>
                                {this.renderImages (spicy)}
                              </Row>
                            </div>
                          </ProjectImg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPanel>

              </Col>

            </Tabs>

          </Row>

        </Container>

      </div>
    );
  }
}

export default translate ('translations') (TestPage);
