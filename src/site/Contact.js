import React from "react";
import { Container, Row, Col } from "mdbreact";
import styled, { ThemeProvider } from "styled-components";
import { withNamespaces } from "react-i18next";

import Button from "../components/Button";
import CardHeader from "../components/CardHeader";
import CardText from "../components/CardText";
import CardBody from "../components/CardBody";
import Card from "../components/Card";
import Icon from "../components/Fa";
import Head from "../components/PageHeading";

import DefaultTheme from "../DefaultTheme";

const ContactIcon = styled.i`
  margin: 2px 15px 0 0;
  color: ${props => props.theme.colors.primary};
`;
const SocialIcon = styled(Icon)``;

class Contact extends React.Component {
  componentDidMount() {
    document.title = "Contact";
    window.scrollTo(0, 0);
  }
  render() {
    const { t } = this.props;

    return (
      <ThemeProvider theme={DefaultTheme}>
        <div>
          <Head title={t("Contact")} />
          <Container>
            <Row>
              <Col size="12" className="mt-1 mb-2 text-right">
                <h5 className="mt-1 mb-4 text-justify">{t("ContactText")}</h5>
              </Col>
            </Row>
            <Row className="contact-container">
              <Col lg="4" md="12" className="mb-2">
                <Card>
                  <CardHeader color="indigo lighten-1" className="text-center">
                    {t("ContactDetails")}
                  </CardHeader>
                  <CardBody>
                    <CardText style={{ fontSize: "1.25rem" }} tag="div">
                      <div className="adress-card-info">
                        <div className="address-card-info-group">
                          <ContactIcon className="fa fa-map-marker icon-location" />
                          <p className="contact-info-text">40597 Düsseldorf</p>
                        </div>
                        <div className="address-card-info-group">
                          <ContactIcon className="fa fa-phone icon-phone" />
                          <p className="contact-info-text">
                            +49 157 376 22 367
                          </p>
                        </div>
                        <div className="address-card-info-group">
                          <ContactIcon className="fa fa-envelope-o icon-mail" />
                          <p className="contact-info-text">
                            i_vasilev@ymail.com
                          </p>
                        </div>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="12" className="mb-2">
                <Card>
                  <CardHeader color="indigo lighten-1" className="text-center">
                    {t("Social")}
                  </CardHeader>
                  <CardBody>
                    <CardText tag="div">
                      <ul className="social">
                        <li className="list-xing">
                          <a
                            href="https://www.xing.com/profile/Ivan_Vasilev19"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SocialIcon icon="xing" size="3x" />
                          </a>
                        </li>
                        <li className="list-linkedin">
                          <a
                            href="https://www.linkedin.com/in/vasilev-ivan/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SocialIcon icon="linkedin" size="3x" />
                          </a>
                        </li>
                        <li className="list-github">
                          <a
                            href="https://github.com/bartex11"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SocialIcon icon="github" size="3x" />
                          </a>
                        </li>
                      </ul>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="4" md="12">
                <Card>
                  <CardHeader color="indigo lighten-1" className="text-center">
                    {t("Download")}
                  </CardHeader>
                  <CardBody>
                    <CardText style={{ textAlign: "center" }} tag="div">
                      <Button
                        outline
                        disabled
                        color="indigo"
                        href="./content/CV.pdf"
                        download="Vasilev-CV"
                      >
                        {t("Cv")}
                      </Button>
                      <Button
                        color="indigo"
                        disabled
                        href="./content/Resume.pdf"
                        download="Vasilev-Resume"
                      >
                        {t("Resume")}
                      </Button>
                      <Button
                        color="green"
                        disabled
                        href="./content/Reference.pdf"
                        download="Vasilev-Resume"
                      >
                        {t("Reference")}
                      </Button>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default withNamespaces()(Contact);
