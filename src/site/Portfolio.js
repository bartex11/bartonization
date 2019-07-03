import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import Icon from '../components/Fa';
import {
  Container,
  Col,
  Row,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBadge,
} from 'mdbreact';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Head from '../components/PageHeading';

import './Lightbox.css';
import Lightbox from 'react-image-lightbox';

const SocialIcon = styled (Icon)`

`;
const Pill = styled (MDBBadge)`
  background-color: ${props => props.theme.colors.primary}a6!important;
  padding: .5em 1em .5em 1em;
  margin: .2em
`;
const ContactIcon = styled.i`
  margin: 2px 15px 0 0;
  color: ${props => props.theme.colors.primary};
`;
const ProjectImg = styled.div`

`;

const ToolsList = styled.ul`
  list-style-type:none;
  padding: 0;
`;
const ToolsListItem = styled.li`
  margin: 5px;
  display: inline-block;
  padding: 6px 16px;
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: #617fbb;
  }
`;

const Toolstext = styled.p`
   font-size: 20px;
   margin: 0;
   color: #fff
`;

class TestPage extends React.Component {
  componentDidMount () {
    document.title = 'Portfolio';
  }

  state = {
    photoIndex: 0,
    all: [
      {
        name: 1,
        imgSrc: './images/Askora/1.jpg',
      },
      './images/Askora/1.jpg',
      './images/NN/1.png',
      './images/KK/1-3.jpg',
      './images/FF/1.png',
      './images/Spa/1.png',
      './images/WROO/1.png',
    ],
    free: ['./images/Askora/1.jpg', './images/NN/1.png', './images/KK/1-3.jpg'],
    spicy: ['./images/FF/1.png', './images/Spa/1.png', './images/WROO/1.png'],
    allProjekt: ['Askora', 'NN', 'KK', 'FF', 'Spa', 'WROO'],
    freeProjekt: ['Askora', 'NN', 'KK'],
    spicyProjekt: ['FF', 'Spa', 'WROO'],
  };
  renderImages = test => {
    let photoIndex = -1;

    return test.map ((imageSrc, ProjectName) => {
      photoIndex++;

      return (
        <MDBCol md="3" key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt={ProjectName}
              className="img-fluid z-depth-1"
            />
            <p class="text-uppercase font-weight-bold blue-grey-text mt-4">
              {ProjectName}
            </p>
          </figure>
        </MDBCol>
      );
    });
  };
  render () {
    const {
      all,
      free,
      spicy,
      allProjekt,
      freeProjekt,
      spicyProjekt,
    } = this.state;
    const {t} = this.props;

    return (
      <div>
        <Head title={t ('Portfolio')} />

        <Container className="resume-container resume-desktop">
          <Row>

            <Tabs style={{marginTop: '3rem'}}>
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
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          All
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            Alll
                          </MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            All text
                          </MDBCardText>
                          <ProjectImg>
                            <div className="mdb-lightbox p-3">
                              <MDBRow>
                                {this.renderImages (all, allProjekt)}
                              </MDBRow>
                            </div>
                          </ProjectImg>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    <Col size="12">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          Freee
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            Freeee
                          </MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            Freee text
                          </MDBCardText>
                          <ProjectImg>
                            <div className="mdb-lightbox p-3">
                              <MDBRow>
                                {this.renderImages (free, freeProjekt)}
                              </MDBRow>
                            </div>
                          </ProjectImg>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    <Col size="12">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          Spicy
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            Spicy
                          </MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            Spicy text
                          </MDBCardText>
                          <ProjectImg>
                            <div className="mdb-lightbox p-3">
                              <MDBRow>
                                {this.renderImages (spicy, spicyProjekt)}
                              </MDBRow>
                            </div>
                          </ProjectImg>
                        </MDBCardBody>
                      </MDBCard>
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
