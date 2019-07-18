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
  MDBBadge,
} from 'mdbreact';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import Head from '../components/PageHeading';
import Data from '../data/Data';
import './Portfolio.scss';

const ProjectImg = styled.div``;

const Pill = styled (MDBBadge)`
  background-color: ${props => props.theme.colors.primary}a6!important;
  padding: .5em 1em .5em 1em;
  margin: .2em
`;

class Protfolio extends React.Component {
  componentDidMount () {
    document.title = 'Portfolio';
    window.scrollTo (0, 0);
  }

  state = {
    photoIndex: 0,
    data: Data,
  };
  renderImages = projects => {
    let photoIndex = -1;

    return projects.map (project => {
      photoIndex++;

      let techno = project.technologies.split (',').map (item => {
        return <Pill pill key={item}>{item}</Pill>;
      });

      let tool = project.tools.split (',').map (item => {
        return <Pill pill key={item}>{item}</Pill>;
      });

      let link;

      if (project.link) {
        link = (
          <Link to={project.link}>
            <Button color="indigo" rounded>
              More details
            </Button>
          </Link>
        );
      } else {
        link = (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Button color="indigo" rounded>
              View online
            </Button>
          </a>
        );
      }

      return (
        <Col md="6" className="mb-4" key={photoIndex}>
          <Card>
            <CardImage
              className="img-fluid"
              src={project.imgSrc}
              alt={project.name}
              waves
            />
            <CardBody>
              <CardTitle>{project.name}</CardTitle>
              <CardText tag="div">
                <div className="techno-container">
                  <strong>Angewandte Technologien: </strong>
                  <br />
                  {techno}
                </div>
                <div className="tools-container">
                  <strong>Frameworks & Build-Tools: </strong>
                  <br />
                  {tool}
                </div>
              </CardText>

              {link}

            </CardBody>
          </Card>
        </Col>
      );
    });
  };
  render () {
    const {data} = this.state;
    const {t} = this.props;

    return (
      <div className="portfolio-container">
        <Head title={t ('Portfolio')} />

        <Container>
          <Row>
            <Tabs>
              <Col xs="12" sm="12" md="12" lg="2" className="tabs-menu">
                <TabList>
                  <Tab>
                    <p>All Projects</p>
                  </Tab>
                  <Tab>
                    <p>Frelance projects</p>
                  </Tab>
                  <Tab>
                    <p>Spicy Media</p>
                  </Tab>
                </TabList>
              </Col>

              <Col xs="12" sm="12" md="12" lg="10" className="tabs-content">
                <TabPanel>

                  <Row>
                    <Col size="12">
                      <Card>
                        <CardHeader color="indigo lighten-1">All</CardHeader>
                        <CardBody>
                          <ProjectImg>

                            <Row>
                              {this.renderImages (data.spicy)}
                              {this.renderImages (data.free)}
                            </Row>

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
                          <ProjectImg>
                            <div className="-lightbox p-3">

                              <Row>{this.renderImages (data.free)}</Row>

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
                          <ProjectImg>
                            <div className="-lightbox p-3">

                              <Row>{this.renderImages (data.spicy)}</Row>

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

export default translate ('translations') (Protfolio);
