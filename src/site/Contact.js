import React from 'react';
import {Container, Row, Col} from 'mdbreact';
import styled, {ThemeProvider} from 'styled-components';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
} from 'mdbreact';

import Icon from '../components/Fa';

import DefaultTheme from '../DefaultTheme';

const ContactIcon = styled.i`
  margin: 2px 15px 0 0;
  color: ${props => props.theme.colors.primary};
`;
const SocialIcon = styled (Icon)`

`;

export default () => (
  <ThemeProvider theme={DefaultTheme}>
    <Container style={{marginTop: '3rem'}}>
      <Row>
        <Col size="12" className="mt-1 mb-2 text-right">
          <h5 class="mt-1 mb-2 text-left">
            Ich bin per Mail zu erreichen. Schreiben Sie mich an! Ich stehe für jede Frage zur Verfügung und freue mich weiterzuhelfen zu können. Fragen kostet nichts! Ansonsten natürlich auch über die sozialen Kanäle. Code Beispiele und Arbeiten gibt es auf GitHub.
          </h5>
        </Col>
      </Row>
      <Row className="contact-container">
        <Col size="4">
          <MDBCard>
            <MDBCardHeader color="indigo lighten-1" className="text-center">
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
            <MDBCardHeader color="indigo lighten-1" className="text-center">
              Social networks
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText>
                <ul class="social">
                  <li class="list-xing">
                    <a
                      href="https://www.xing.com/profile/Ivan_Vasilev19"
                      target="_blank"
                    >
                      <SocialIcon icon="xing" size="3x" />
                    </a>
                  </li>
                  <li class="list-linkedin">
                    <a href="linkedin.com/in/bartonization">
                      <SocialIcon icon="linkedin" size="3x" />
                    </a>
                  </li>
                  <li class="list-github">
                    <a href="https://github.com/bartex11">
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
            <MDBCardHeader color="indigo lighten-1" className="text-center">
              Downloads
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardText style={{textAlign: 'center'}}>
                <MDBBtn outline color="indigo">
                  My CV
                </MDBBtn>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Col>

      </Row>
    </Container>
  </ThemeProvider>
);
