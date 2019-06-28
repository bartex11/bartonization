import React from 'react';
import {withNamespaces} from 'react-i18next';
import Icon from '../components/Fa';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import styled from 'styled-components';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
} from 'mdbreact';

import './Resume.scss';

const SocialIcon = styled (Icon)`

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
        <Container className="resume-container">
          <Row>
            <Col size="12">
              <h1>Ivan Vasilev</h1>
              <h3>Frontend Web Developer</h3>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col size="3">
              <h2>About me</h2>
            </Col>
            <Col size="9" className="pl-5">
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
            <Col size="3" className="text-right">
              <h6>Januar 2017 – Jetzt</h6>
            </Col>
            <Col size="9" className="pl-5">
              <MDBCard style={{marginBottom: '25px'}}>
                <MDBCardHeader color="indigo lighten-1">
                  Spycymedia GmbH
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Frontend Web Deweloper</MDBCardTitle>
                  <MDBCardText style={{fontSize: '1.25rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio possimus nulla rem quasi, corrupti repellendus. Dolorem eaque quam debitis necessitatibus
                    quod, accusantium ab ea corporis, tenetur mollitia porro dignissimos!
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
            <Col size="3" className="text-right">
              <h5>LANGUAGES</h5>
            </Col>
            <Col size="9" className="pl-5 tools-container">
              <ToolsList>
                <ToolsListItem className="tool-item">
                  <Toolstext>HTML5 - Twig, Liquid</Toolstext>
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
            <Col size="3" className="text-right">
              <h5>FRAMEWORKS & LIBS</h5>
            </Col>
            <Col size="9" className="pl-5">
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
            <Col size="3" className="text-right">
              <h5>ADDITIONAL</h5>
            </Col>
            <Col size="9" className="pl-5">
              <ToolsList>
                <ToolsListItem><Toolstext>Shopify</Toolstext></ToolsListItem>
                <ToolsListItem><Toolstext>Odoo</Toolstext> </ToolsListItem>
                <ToolsListItem>
                  <Toolstext>Git version control system</Toolstext>
                </ToolsListItem>

              </ToolsList>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col size="3" className="mb-1">
              <h2>Contact</h2>
            </Col>

            <Col size="9" className="pl-5 mt-2">
              <Row>
                <Col size="4" className="mb-1">
                  <h4 className="text-center">Kontaktdaten</h4>
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
                <Col size="4" className="mb-1">
                  <h4 className="text-center">Social networks</h4>

                  <ul class="social">
                    <li class="list-xing">
                      <a href="">
                        <SocialIcon icon="xing" size="3x" />
                      </a>
                    </li>
                    <li class="list-linkedin">
                      <a href="">
                        <SocialIcon icon="linkedin" size="3x" />
                      </a>
                    </li>
                    <li class="list-github">
                      <a href="">
                        <SocialIcon icon="github" size="3x" />
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col size="4" className="mb-1 text-center">
                  <h4 className="text-center">Downloads</h4>
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
