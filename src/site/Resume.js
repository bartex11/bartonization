import React from "react";
import { withNamespaces } from "react-i18next";
import styled from "styled-components";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBBadge
} from "mdbreact";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Head from "../components/PageHeading";
import Icon from "../components/Fa";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import "./Resume.scss";

const SocialIcon = styled(Icon)``;
const Pill = styled(MDBBadge)`
  background-color: ${props => props.theme.colors.primary}a6!important;
  padding: 0.5em 1em 0.5em 1em;
  margin: 0.2em;
`;
const ContactIcon = styled.i`
  margin: 2px 15px 0 0;
  color: ${props => props.theme.colors.primary};
`;

const ToolsList = styled.ul`
  list-style-type: none;
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
  color: #fff;
`;

class Resume extends React.Component {
  componentDidMount() {
    document.title = "Resume";
    window.scrollTo(0, 0);
  }
  render() {
    const { t } = this.props;
    return (
      <div className="resume-container">
        <Head title={t("Resume")} />
        <Container>
          <Row>
            <Tabs>
              <Col xs="12" sm="12" md="12" lg="2" className="tabs-menu">
                <TabList>
                  <Tab>
                    <p>{t("Profile")}</p>
                  </Tab>
                  <Tab>
                    <p>{t("Experience")}</p>
                  </Tab>
                  <Tab>
                    <p>{t("Education")}</p>
                  </Tab>
                  <Tab>
                    <p>{t("Skills")}</p>
                  </Tab>
                  <Tab>
                    <p>{t("Contact")}</p>
                  </Tab>
                </TabList>
              </Col>
              <Col xs="12" sm="12" md="12" lg="10" className="tabs-content">
                <TabPanel>
                  <Row>
              
                    <Col size="12">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          {t("Resume")}
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>{t("Duss")}</MDBCardTitle>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            {t("Story")} <br/><br/>
                            {t ('Story1')}
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
                 
                  <Row className="mb-2">
                    <Col
                      xs="12"
                      sm="12"
                      md="12"
                      lg="2"
                      className="text-right p-0"
                    >
                      <h6 class="mt-3">
                        <strong>
                          {t("Nov")} 2019 – {t("Present")}
                        </strong>
                      </h6>
                      <div class="mt-3">
                        <Pill pill>TYPO3</Pill>
                        <Pill pill>HTML5</Pill>
                        <Pill pill>CSS3</Pill>
                        <Pill pill>Java Script</Pill>
                        
                      </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="10">
                      <MDBCard style={{ marginBottom: "25px" }}>
                        <MDBCardHeader color="indigo lighten-1">
                          engine-productions GmbH, Köln
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>{t("Frontend")}</MDBCardTitle>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            <p>
                              <strong>{t("About")} Engine: </strong>
                              Agentur für Digitalisierung mit TYPO3 CMS und interaktiven Onlinelösungen in Köln
                            </p>
                            <p>
                              <strong>{t("Goals")}: </strong>
                              Realisierung von TYPO3-basierten Web-Projekte
                              <br />
                              Programmierung von TYPO3-Extensions mit Extbase und Fluid
                              <br />
                              Optimierung für mobile Endgeräte und die Programmierung ansprechender und innovativer User Interfaces
                            </p>
                            <p>
                              <strong>{t("Projects")}: </strong>
                              Primalkima, Rewe Digital, Agiamondo, Regenbogenportal, Stark im Beruf, MGH, Deltax, Ardex ....
                            </p>
                            <p>
                              <strong>{t("Technologies")}: </strong>
                              TYPO3, Extbase, Fluid, Flux, HTML5, CSS3, JavaScript-Frameworks, Bootstrap, Figma, Composer, JIRA, Bitbucket, Trello, Jenkins, Git, BITV(Barrierefreiheit von informationsorientierten Webangeboten)...
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col
                      xs="12"
                      sm="12"
                      md="12"
                      lg="2"
                      className="text-right p-0"
                    >
                      <h6 class="mt-3">
                        <strong>
                          {t("January")} 2017 – Nov 2019
                        </strong>
                      </h6>
                      <div class="mt-3">
                        <Pill pill>HTML5</Pill>
                        <Pill pill>CSS3</Pill>
                        <Pill pill>Java Script</Pill>
                        <Pill pill>Angular</Pill>
                        <Pill pill>React</Pill>
                        <Pill pill>Shopify</Pill>
                      </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="10">
                      <MDBCard style={{ marginBottom: "25px" }}>
                        <MDBCardHeader color="indigo lighten-1">
                          Spycymedia GmbH, Düsseldorf
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>{t("Frontend")}</MDBCardTitle>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            <p>
                              <strong>{t("About")} Spicymedia: </strong>
                              {t("AboutSpicy")}
                            </p>
                            <p>
                              <strong>{t("Goals")}: </strong>
                              Building a component-based front-end (JS/CSS)
                              framework.
                              <br />
                              Developing a responsive web app with HTML, CSS,
                              JavaScript, React and AngularJS.
                              <br />
                              Web Development with Shopify and Symfony.
                            </p>
                            <p>
                              <strong>{t("Projects")}: </strong>
                              Washeroo, Spa Group Europe, FabFoods
                            </p>
                            <p>
                              <strong>{t("Technologies")}: </strong>
                              HTML5, CSS3, Java Script, Angular, React, Symfony,
                              Shopify, Odoo ....
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                  <Row className="mb-2">
                    <Col
                      xs="12"
                      sm="12"
                      md="12"
                      lg="2"
                      className="text-right p-0"
                    >
                      <h6 class="mt-3">
                        <strong>
                          {t("January")} 2016 – {t("Present")}
                        </strong>
                      </h6>
                      <div class="mt-3">
                        <Pill pill>HTML5</Pill>
                        <Pill pill>CSS3</Pill>
                        <Pill pill>Java Script</Pill>
                        <Pill pill>Wordpress</Pill>
                        <Pill pill>UI/UX</Pill>
                        <Pill pill>SEO</Pill>
                      </div>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="10">
                      <MDBCard style={{ marginBottom: "25px" }}>
                        <MDBCardHeader color="indigo lighten-1">
                          Freelance
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>Web Developer</MDBCardTitle>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            <p>
                              <strong>{t("Goals")}: </strong>
                              Umsetzung und Entwicklung von Web pages.
                            </p>
                            <p>
                              <strong>{t("Projects")}: </strong>NN, KK, Askora
                            </p>
                            <p>
                              <strong>{t("Technologies")}: </strong>
                              HTML5, CSS3, Java Script, Bootsrtap, SEO....
                            </p>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </TabPanel>
                <TabPanel>
          
                  <Row className="mb-2">
                    <Col
                      xs="12"
                      sm="12"
                      md="12"
                      lg="3"
                      className="text-right p-0"
                    >
                      <h5>
                        <strong>Technische Universität Sofia</strong>{" "}
                      </h5>
                      <h6>09.2005 – 05.2008</h6>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="9">
                      <MDBCard style={{ marginBottom: "25px" }}>
                        <MDBCardHeader color="indigo lighten-1">
                          <strong>Abschluss: </strong>Master of Engineering
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            <strong>Studium: </strong>
                            Maschinen- und Gerätebau mit Schwerpunkt Logistik
                          </MDBCardTitle>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            <strong>Berufsqualifikation: </strong>
                            Maschinenbauingenieur
                            <br />
                            <strong>Thema der Masterarbeit: </strong>
                            Entwicklung eines Logistiksystems für die Lieferung,
                            Verteilung und Lagerung von Ersatzteilen zur
                            Modernisierung elektrischer Lokomotiven.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>

                  <Row className="mb-2">
                    <Col
                      xs="12"
                      sm="12"
                      md="12"
                      lg="3"
                      className="text-right p-0"
                    >
                      <h5>
                        <strong>Technische Universität Sofia</strong>
                      </h5>
                      <h6>09.1998 – 05.2002</h6>
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="9">
                      <MDBCard style={{ marginBottom: "25px" }}>
                        <MDBCardHeader color="indigo lighten-1">
                          <strong>Abschluss: </strong>Bachelor of Engineering
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardTitle>
                            <strong>Studiengang: </strong>
                            Maschinen- und Gerätebau
                          </MDBCardTitle>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            <strong>Berufsqualifikation: </strong>
                            Maschinenbauingenieur
                            <br />
                            <strong>Thema der Diplomarbeit: </strong>
                            Entwicklung eines innenbetrieblichen
                            Transportsystems für den Herstellungssektor eines
                            Elektronikbetrieb
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </Col>
                  </Row>
                </TabPanel>

                <TabPanel>
                  <Row>
              
                    <Col size="12" className="mb-2">
                      <MDBCard>
                        <MDBCardHeader color="indigo lighten-1">
                          LANGUAGES
                        </MDBCardHeader>
                        <MDBCardBody>
                          
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            <ToolsList className="tool-list">
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                Semantic<strong> HTML5</strong>
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
                                  <strong>TYPO3 </strong>
                                  Open-source CMS
                                </Toolstext>
                              </ToolsListItem>
                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Twig </strong>
                                  Template engine for PHP
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
                      
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
                            <ToolsList className="tool-list">

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Bootstrap</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>jQuery</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Fluid</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Composer</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Figma</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>React</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Styled components</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Symfony </strong>
                                  Set of PHP Components
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Wordpress</strong>
                                </Toolstext>
                              </ToolsListItem>

                              <ToolsListItem className="tool-item">
                                <Toolstext>
                                  <strong>Angular</strong>
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
                          ADDITIONAL
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
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
                                  <strong>BITV </strong>
                                  Barrierefreiheit von informationsorientierten Webangeboten
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
                      <h5 class="mt-1 mb-2 text-left">{t("ContactText")}</h5>
                    </Col>
                  </Row>
                  <Row className="contact-container">
                    <Col xs="12" sm="12" md="12" lg="4">
                      <MDBCard>
                        <MDBCardHeader
                          color="indigo lighten-1"
                          className="text-center"
                        >
                          {t("Contact")}
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText style={{ fontSize: "1.25rem" }}>
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
                    <Col xs="12" sm="12" md="12" lg="4">
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

                    <Col xs="12" sm="12" md="12" lg="4">
                      <MDBCard>
                        <MDBCardHeader
                          color="indigo lighten-1"
                          className="text-center"
                        >
                          {t("Download")}
                        </MDBCardHeader>
                        <MDBCardBody>
                          <MDBCardText style={{ textAlign: "center" }}>
                            <MDBBtn
                              outline
                              color="indigo"
                              disabled
                              href="./content/CV.pdf"
                              download="Vasilev-CV"
                            >
                              {t("Cv")}
                            </MDBBtn>
                            <MDBBtn
                              color="indigo"
                              href="./content/Resume.pdf"
                              disabled
                              download="Vasilev-Resume"
                            >
                              {t("Resume")}
                          
                            </MDBBtn>
                            <MDBBtn
                              color="green"
                              disabled
                              href="./content/Reference.pdf"
                              download="Vasilev-Resume"
                            >
                              {t("Reference")}
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
      </div>
    );
  }
}

export default withNamespaces()(Resume);
