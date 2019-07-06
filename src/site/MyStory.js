import React from 'react';
import { withNamespaces } from 'react-i18next';

import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from 'mdbreact';
import Head from '../components/PageHeading';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

import './MyStory.scss';

class MyStory extends React.Component {
  componentDidMount() {
    document.title = 'My Story';
  }
  render() {
    const { t } = this.props;

    function formatDate(date) {
      return date.toLocaleDateString();
    }

    return (
      <div class="about-container">
        <div className="paper-background">
          <span className="coffee-stain" />
          <span className="duss" />
          <span className="paper-date">Düsseldorf, 07.06.2019</span>
          <section className="paper-content">
            <p>{t('Story')}</p>
            <br />
            <p>{t('Story1')}</p>
            <br />
            <p>{t('Story2')}</p>
            <br />
            <p>{t('Story3')}</p>
            <br />
            <br />
            <p class="paper-signature">Ivan Vasilev</p>
          </section>
        </div>
        <Container className="about-mobile">
          <Head title={t('AboutHead')} small />
          <Row>
            <Col size="12" className="mt-1 mb-5 ">
              <MDBCard>
                <MDBCardHeader color="indigo lighten-1" style={{ fontSize: '1.5rem' }}>
                  {t('About')}
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText style={{ fontSize: '1rem' }}>
                    {t('Story')}
                    <br />
                    {t('Story1')}
                    <br />
                    {t('Story2')}
                    <br />
                    {t('Story3')}
                    <br />
                    <br />
                    <p class="paper-signature">Ivan Vasilev</p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withNamespaces()(MyStory);
