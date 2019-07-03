import React from 'react';
import {withNamespaces} from 'react-i18next';
import styled from 'styled-components';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBBadge,
} from 'mdbreact';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import Head from '../components/PageHeading';
import Icon from '../components/Fa';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

import './Resume.scss';

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

class Resume extends React.Component {
  componentDidMount () {
    document.title = 'Resume';
  }
  render () {
    const {t} = this.props;
    return (
      <section id="resume">
        <Head title={t ('Resume')} />
        <Container className="resume-container resume-desktop">

          <Row>

            <Tabs style={{marginTop: '3rem'}}>
              <Col size="2" className="tabs-menu">
                <TabList>
                  <Tab><p>Profile</p></Tab>
                  <Tab><p>Experience</p></Tab>
                  <Tab><p>Education</p></Tab>
                  <Tab><p>Skills</p></Tab>
                  <Tab><p>Contact</p></Tab>
                </TabList>
              </Col>
              <Col size="10" className="tabs-content">
                <TabPanel>
                  <Row>
                    <Col size="12" className="mt-1 mb-2 text-right">
                      <h2>About me</h2>
                    </Col>
                    <Col size="12">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          Hello, my name is Ivan Vasilev.
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            I'm a Frontend Webdeveloper living in Düsseldorf, Germany.
                          </MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            I live and work by the mantra "Never stop learning..." I’ve always been good at math and science that’s why I graduated as a
                            mechanical engineer. After many years working in the logistics, I decided to learn web development. I find great interest in all new digital technologies and latest
                            design practices. So I came into the world of WEB. Relatively quickly I learned the basics, because I think logically and I understand the technical part of the
                            projects. I developed some projects and continue to improve them. I also made without a budget their SEO-optimization.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                  <Row>
                    <Col size="12" className="mt-1 mb-2 text-right">
                      <h2>Work Experience</h2>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col size="2" className="text-right p-0">
                      <h6 class="mt-3"><strong>Januar 2017 – Jetzt</strong></h6>
                      <div class="mt-3">
                        <Pill pill>
                          HTML5
                        </Pill>
                        <Pill pill>
                          CSS3
                        </Pill>
                        <Pill pill>
                          Java Script
                        </Pill>
                        <Pill pill>
                          Angular
                        </Pill>
                        <Pill pill>
                          React
                        </Pill>
                        <Pill pill>
                          Shopify
                        </Pill>
                      </div>

                    </Col>
                    <Col size="10">
                      <MDBCard style={{marginBottom: '25px'}}>
                        <MDBCardHeader color="indigo lighten-1">
                          Spycymedia GmbH, Düsseldorf
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>Frontend Web Deweloper</MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <p>
                              <strong>About Spycymedia: </strong>
                              Die SPICY Media GmbH ist ein Startup aus Düsseldorf mit dem Schwerpunkt Neue Medien.
                            </p>
                            <p>
                              <strong>Ziele/Aufgeben: </strong>
                              Building a component-based front-end (JS/CSS) framework.
                              <br />
                              Developing a responsive web app with HTML, CSS, JavaScript and AngularJS.
                              <br />
                              Web Development with PHP and Symfony.

                            </p>
                            <p>
                              <strong>Projects: </strong>
                              Washeroo, Spa Group Europe, FabFoods
                            </p>
                            <p>
                              <strong>Angewandte Technologien: </strong>
                              HTML5, CSS3, Java Script, Angular, React, Symfony, Shopify, Odoo ....
                            </p>

                          </MDBCardText>

                        </MDBCardBody>
                      </MDBCard>

                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col size="2" className="text-right p-0">
                      <h6 class="mt-3"><strong>Januar 2016 – Jetzt</strong></h6>
                    </Col>
                    <Col size="10">
                      <MDBCard style={{marginBottom: '25px'}}>
                        <MDBCardHeader color="indigo lighten-1">
                          Freelance
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>Web Deweloper</MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <p>
                              <strong>Ziele/Aufgeben: </strong>
                              Umsetzung und Entwicklung von Web pages.
                            </p>
                            <p>
                              <strong>Projects: </strong>NN, KK, Askora
                            </p>
                            <p>
                              <strong>Angewandte Technologien: </strong>
                              HTML5, CSS3, Java Script, Bootsrtap, SEO....
                            </p>
                          </MDBCardText>

                        </MDBCardBody>
                      </MDBCard>

                    </Col>

                  </Row>
                </TabPanel>
                <TabPanel>

                  <Row>
                    <Col size="12" className="mt-1 mb-2 text-right">
                      <h2>Education</h2>
                    </Col>
                  </Row>

                  <Row className="mb-2">
                    <Col size="3" className="text-right p-0">
                      <h5><strong>Technische Universität Sofia</strong> </h5>
                      <h6>09.2005 – 05.2008</h6>
                    </Col>
                    <Col size="9">
                      <MDBCard style={{marginBottom: '25px'}}>
                        <MDBCardHeader color="indigo lighten-1">
                          <strong>Abschluss: </strong>Master of Engineering
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            <strong>Studium: </strong>
                            Maschinen- und Gerätebau mit Schwerpunkt Logistik
                          </MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <strong>Berufsqualifikation: </strong>
                            Maschinenbauingenieur
                            <br />
                            <strong>Thema der Masterarbeit: </strong>
                            Entwicklung eines Logistiksystems für die Lieferung, Verteilung und Lagerung von Ersatzteilen zur Modernisierung elektrischer Lokomotiven.
                          </MDBCardText>

                        </MDBCardBody>
                      </MDBCard>

                    </Col>
                  </Row>

                  <Row className="mb-2">
                    <Col size="3" className="text-right p-0">
                      <h5><strong>Technische Universität Sofia</strong></h5>
                      <h6>09.1998 – 05.2002</h6>
                    </Col>
                    <Col size="9">
                      <MDBCard style={{marginBottom: '25px'}}>
                        <MDBCardHeader color="indigo lighten-1">
                          <strong>Abschluss: </strong>Bachelor of Engineering
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            <strong>Studiengang: </strong>
                            Maschinen- und Gerätebau
                          </MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <strong>Berufsqualifikation: </strong>
                            Maschinenbauingenieur
                            <br />
                            <strong>Thema der Diplomarbeit: </strong>
                            Entwicklung eines innenbetrieblichen Transportsystems für den Herstellungssektor eines Elektronikbetrieb
                          </MDBCardText>

                        </MDBCardBody>
                      </MDBCard>

                    </Col>
                  </Row>

                </TabPanel>
                <TabPanel>

                  <Row>
                    <Col size="12" className="mt-1 mb-2 text-right">
                      <h2>Skills and Tools</h2>
                    </Col>

                    <Col size="12" className="mb-2">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          LANGUAGES
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>Special title treatment</MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <ToolsList className="tool-list">
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Semantic HTML5</strong>
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>CSS</strong>
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Java Script</strong> (ES6)
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Twig </strong>Template engine for PHP
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Liquid </strong>
                                  Template language written in Ruby
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>SASS, LESS </strong>
                                  CSS extension und preprocessor
                                </Toolstext>
                              </ToolsListItem>

                            </ToolsList>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>

                    <Col size="12" className="mb-2">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          FRAMEWORKS & LIBS
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>Special title treatment</MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <ToolsList className="tool-list">
                              <ToolsListItem className="tool-item">
                                <Toolstext><strong>React</strong></Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Styled components</strong>
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext><strong>jQuery</strong></Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Bootstrap</strong>
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Symfony </strong>Set of PHP Components
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Wordpress</strong>
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext><strong>Angular</strong></Toolstext>
                              </ToolsListItem>
                            </ToolsList>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>

                    <Col size="12" className="mb-2">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          ADDITIONAL
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>Special title treatment</MDBCardTitle>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <ToolsList className="tool-list">
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Atlassian </strong>
                                  Jira, Trello, Bitbucket...
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Git</strong> Version control system
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>SEO </strong>
                                  Google tools, Yandex,Metrica, Hotjar..
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Shopify </strong>
                                  E-Commerce-Software/Cloud-Shopsystem
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Odoo </strong>
                                  Management-Software/Cloud Platform
                                </Toolstext>
                              </ToolsListItem>

                            </ToolsList>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>

                  <Row>
                    <Col size="12" className="mt-1 mb-2 text-right">
                      <h2>Contact</h2>
                      <h5 class="mt-1 mb-2 text-left">
                        Ich bin per Mail zu erreichen. Schreiben Sie mich an! Ich stehe für jede Frage zur Verfügung und freue mich weiterzuhelfen zu können. Fragen kostet nichts! Ansonsten natürlich auch über die sozialen Kanäle. Code Beispiele und Arbeiten gibt es auf GitHub.
                      </h5>
                    </Col>
                  </Row>
                  <Row className="contact-container">
                    <Col size="4">
                      <MDBCard>
                        <MDBCardHeader
                          color="indigo lighten-1"
                          className="text-center"
                        >
                          Kontaktdaten
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText style={{fontSize: '1.25rem'}}>
                            <div class="adress-card-info">
                              <div class="address-card-info-group">
                                <ContactIcon className="fa fa-map-marker icon-location" />
                                <p class="contact-info-text">
                                  40597 Düsseldorf
                                </p>
                              </div>
                              <div class="address-card-info-group">
                                <ContactIcon className="fa fa-phone icon-phone" />
                                <p class="contact-info-text">
                                  +49 157 376 22 367
                                </p>
                              </div>
                              <div class="address-card-info-group">
                                <ContactIcon className="fa fa-envelope-o icon-mail" />
                                <p class="contact-info-text">
                                  i_vasilev@ymail.com
                                </p>
                              </div>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                    <Col size="4">
                      <MDBCard>
                        <MDBCardHeader
                          color="indigo lighten-1"
                          className="text-center"
                        >
                          Social networks
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText>
                            <ul class="social">
                              <li class="list-xing">
                                <a
                                  href="https://www.xing.com/profile/Ivan_Vasilev19"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <SocialIcon icon="xing" size="3x" />
                                </a>
                              </li>
                              <li class="list-linkedin">
                                <a
                                  href="linkedin.com/in/bartonization"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <SocialIcon icon="linkedin" size="3x" />
                                </a>
                              </li>
                              <li class="list-github">
                                <a
                                  href="https://github.com/bartex11"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <SocialIcon icon="github" size="3x" />
                                </a>
                              </li>
                            </ul>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>

                    <Col size="4">
                      <MDBCard>
                        <MDBCardHeader
                          color="indigo lighten-1"
                          className="text-center"
                        >
                          Downloads
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText style={{textAlign: 'center'}}>
                            <MDBBtn outline color="indigo">
                              My CV
                            </MDBBtn>
                            <MDBBtn color="indigo">
                              Resume
                            </MDBBtn>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>

                  </Row>

                </TabPanel>
              </Col>

            </Tabs>

          </Row>

        </Container>
        <Container className="resume-container resume-mobile">
          <h1>Mobile</h1>
          <Row>
            <Col size="12">
              <h1>Ivan Vasilev</h1>
              <h3>Frontend Web Developer</h3>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col size="12">
              <h2>About me</h2>
            </Col>
            <Col size="12">
              <MDBCard>
                <MDBCardHeader color="indigo lighten-1">
                  Hello, my name is Ivan Vasilev.
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Special title treatment</MDBCardTitle>
                  <MDBCardText style={{fontSize: '1.25rem'}}>
                    I live and work by the mantra "Never stop learning..." I’ve always been good at math and science that’s why I graduated as a
                    mechanical engineer. After many years working in the logistics, I decided to learn web development. I find great interest in all new digital technologies and latest
                    design practices. So I came into the world of WEB. Relatively quickly I learned the basics, because I think logically and I understand the technical part of the
                    projects. I developed some projects and continue to improve them. I also made without a budget their SEO-optimization.
                  </MDBCardText>

                </MDBCardBody>
              </MDBCard>

            </Col>
          </Row>

          <Row className="mt-5">
            <Col size="12" className="mb-1">
              <h2>Work Experience</h2>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col size="12" className="text-right">
              <h6>Januar 2017 – Jetzt</h6>
            </Col>
            <Col size="12">
              <MDBCard style={{marginBottom: '25px'}}>
                <MDBCardHeader color="indigo lighten-1">
                  Spycymedia GmbH
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Frontend Web Deweloper</MDBCardTitle>
                  <MDBCardText style={{fontSize: '1.25rem'}}>
                    <p>
                      <strong>Ziele/Aufgeben: </strong>
                      Entwicklung eines repräsentativen Internetauftritts.
                    </p>
                    <p>
                      <strong>Angewandte Technologien:</strong>
                      HTML5, CSS3, jQuery
                    </p>

                  </MDBCardText>

                </MDBCardBody>
              </MDBCard>

            </Col>
          </Row>

          <Row className="mb-2">
            <Col size="3" className="text-right">
              <h4>Freelance</h4>
              <h6>Januar 2016 – Jetzt</h6>
            </Col>
            <Col size="9" className="pl-5">
              <h3>Web Deweloper</h3>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam qui nihil ipsum nostrum nobis mollitia eveniet? Cum quo dolore voluptas suscipit, autem
                necessitatibus aspernatur enim soluta perferendis odit cupiditate?
              </h5>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col size="12" className="mb-1">
              <h2>Education</h2>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col size="3" className="text-right">
              <h4>TU Sofia</h4>
              <h6>Long Time Ago</h6>
            </Col>
            <Col size="9" className="pl-5">
              <h3>Magister</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio possimus nulla rem quasi, corrupti repellendus. Dolorem eaque quam debitis necessitatibus
                quod, accusantium ab ea corporis, tenetur mollitia porro dignissimos!
              </h5>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col size="3" className="text-right">
              <h4>TU Sofia</h4>
              <h6>Long Time Ago</h6>
            </Col>
            <Col size="9" className="pl-5">
              <h3>Bachelor</h3>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate cupiditate blanditiis impedit nam beatae veniam, ullam ducimus quam tempora optio
                voluptates nisi reiciendis iste est molestias laboriosam sed. Commodi!
              </h5>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col size="12" className="mb-1">
              <h2>Skills and Tools</h2>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col size="12" className="text-right">
              <h5>LANGUAGES</h5>
            </Col>
            <Col size="12" className="tools-container">
              <ToolsList>
                <ToolsListItem className="tool-item">
                  <Toolstext>Semantic HTML5 - Twig, Liquid</Toolstext>
                </ToolsListItem>
                <ToolsListItem className="tool-item">
                  <Toolstext>
                    CSS und CSS extension und preprocessor - SASS, LESS
                  </Toolstext>
                </ToolsListItem>
                <ToolsListItem className="tool-item">
                  <Toolstext>Java Script(ES6)</Toolstext>
                </ToolsListItem>
              </ToolsList>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col size="12" className="text-right">
              <h5>FRAMEWORKS & LIBS</h5>
            </Col>
            <Col size="12">
              <ToolsList>
                <ToolsListItem className="tool-item">
                  <Toolstext>React</Toolstext>
                </ToolsListItem>
                <ToolsListItem className="tool-item">
                  <Toolstext>jQuery</Toolstext>
                </ToolsListItem>
                <ToolsListItem className="tool-item">
                  <Toolstext>JS(ES6)</Toolstext>
                </ToolsListItem>
                <ToolsListItem className="tool-item">
                  <Toolstext>Symfony</Toolstext>
                </ToolsListItem>
                <ToolsListItem className="tool-item">
                  <Toolstext>Wordpress</Toolstext>
                </ToolsListItem>
              </ToolsList>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col size="12" className="text-right">
              <h5>ADDITIONAL</h5>
            </Col>
            <Col size="12">
              <ToolsList>
                <ToolsListItem><Toolstext>Shopify</Toolstext></ToolsListItem>
                <ToolsListItem><Toolstext>Odoo</Toolstext> </ToolsListItem>
                <ToolsListItem>
                  <Toolstext>Git version control system</Toolstext>
                </ToolsListItem>
                <ToolsListItem>
                  <Toolstext>Responsive Web Design</Toolstext>
                </ToolsListItem>
              </ToolsList>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col size="12" className="mb-1">
              <h2>Contact</h2>
            </Col>

            <Col size="12" className="pl-5 mt-2">
              <Row>
                <Col size="12" className="mb-1">
                  <h4 className="text-right">Kontaktdaten</h4>
                  <div class="adress-card-info">
                    <div class="address-card-info-group">
                      <ContactIcon className="fa fa-map-marker icon-location" />
                      <p class="contact-info-text">
                        40597 Düsseldorf
                      </p>
                    </div>
                    <div class="address-card-info-group">
                      <ContactIcon className="fa fa-phone icon-phone" />
                      <p class="contact-info-text">
                        0211/1234568
                      </p>
                    </div>
                    <div class="address-card-info-group">
                      <ContactIcon className="fa fa-envelope-o icon-mail" />
                      <p class="contact-info-text">info@test.de</p>
                    </div>
                  </div>

                </Col>
                <Col size="12" className="mb-1">
                  <h4 className="text-right">Social networks</h4>

                  <ul class="social">
                    <li class="list-xing">
                      <a
                        href="https://www.xing.com/profile/Ivan_Vasilev19"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon icon="xing" size="3x" />
                      </a>
                    </li>
                    <li class="list-linkedin">
                      <a
                        href="linkedin.com/in/bartonization"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon icon="linkedin" size="3x" />
                      </a>
                    </li>
                    <li class="list-github">
                      <a
                        href="https://github.com/bartex11"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon icon="github" size="3x" />
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col size="12" className="mb-1 text-center">
                  <h4 className="text-right">Downloads</h4>
                  <MDBBtn
                    outline
                    color="indigo"
                    style={{
                      fontSize: '1.25rem',
                      margin: '20px auto',
                      padding: '0.3rem 1rem',
                      textTransform: 'none',
                    }}
                  >
                    My CV
                  </MDBBtn>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default withNamespaces () (Resume);
