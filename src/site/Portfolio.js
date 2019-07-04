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
import Test from '../components/ImgText';
import './Portfolio.scss';

const ProjectImg = styled.div`

`;

const Pill = styled (MDBBadge)`
  background-color: ${props => props.theme.colors.primary}a6!important;
  padding: .5em 1em .5em 1em;
  margin: .2em
`;

class Protfolio extends React.Component {
  componentDidMount () {
    document.title = 'Portfolio';
  }

  state = {
    photoIndex: 0,
    free: [
      {
        name: 'Askora Translation',
        imgSrc: './images/Askora/1.jpg',
        link: '/askora',
        technologies: 'HTML5,CSS3,jQuery,PHP, Responsive Web Design ',
        tools: 'Google SEO Tools',
      },
      {
        name: 'Dentist Chlosta',
        imgSrc: './images/NN/1.png',
        link: '/chlosta',
        technologies: 'HTML5, CSS3, jQuery,',
        tools: 'Wordpress, Google SEO tools, User interface design (UI)',
      },
      {
        name: 'Kosmetik Katerina',
        imgSrc: './images/KK/1-3.jpg',
        link: '/katerina',
        technologies: 'HTML5,CSS3,JavaScript,Responsive Web Design',
        tools: 'Bootstrap, Git, SEO Tools, Git',
      },
    ],
    spicy: [
      {
        name: 'FabFoods',
        imgSrc: './images/FF/1.png',
        link: '/fabfoods',
        technologies: 'React, Styled components, Liquid',
        tools: 'Trello, Git, Shopify, Oddo ',
      },
      {
        name: 'Spa Group Europe',
        imgSrc: './images/Spa/1.png',
        link: '/spa-group',
        technologies: 'React, Styled components',
        tools: 'Trello, Git',
      },
      {
        name: 'Washeroo',
        imgSrc: './images/WROO/1.png',
        link: '/washeroo',
        technologies: 'Angular, CSS3, SASS, Symfony, Twig  ',
        tools: 'Jira, Bitbucket, Git',
      },
    ],
  };
  renderImages = projects => {
    let photoIndex = -1;

    return projects.map (project => {
      photoIndex++;

      let techno = project.technologies.split (',').map (item => {
        return <Pill pill>{item}</Pill>;
      });

      let tool = project.tools.split (',').map (item => {
        return <Pill pill>{item}</Pill>;
      });

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
              <CardText>
                <div class="techno-container">
                  <strong>Angewandte Technologien: </strong><br />
                  {techno}
                </div>
                <div class="tools-container">
                  <strong>Frameworks & Build-Tools: </strong><br />
                  {tool}
                </div>
              </CardText>
              <Link to={project.link}>
                <Button color="indigo" rounded>
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
      <div class="portfolio-container">
        <Head title={t ('Portfolio')} />

        <Container>
          <Row>
            <Tabs>

              <Col xs="12" sm="12" md="12" lg="2" className="tabs-menu">
                <TabList>
                  <Tab><p>All Projects</p></Tab>
                  <Tab><p>Freelancer</p></Tab>
                  <Tab><p>Spicy Media</p></Tab>
                </TabList>
              </Col>

              <Col xs="12" sm="12" md="12" lg="10" className="tabs-content">
                <TabPanel>
                  <Row>
                    <Col size="12">
                      <Card>
                        <CardHeader color="indigo lighten-1">
                          All
                        </CardHeader>
                        <CardBody>
                          <ProjectImg>

                            <Row>
                              {this.renderImages (spicy)}
                              {this.renderImages (free)}
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

export default translate ('translations') (Protfolio);
