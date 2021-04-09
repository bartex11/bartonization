import React from 'react';
import {withNamespaces} from 'react-i18next';

import {MDBCard, MDBCardBody, MDBCardHeader} from 'mdbreact';
import Head from '../components/PageHeading';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

import './MyStory.scss';

class MyStory extends React.Component {
  componentDidMount () {
    document.title = 'My Story';
    window.scrollTo (0, 0);
  }
  render () {
    const {t} = this.props;

    return (
      <div className="about-container">
        <div className="paper-background">
          <span className="coffee-stain" />
          <span className="duss" />
          <span className="paper-date">Düsseldorf, 04.04.2021</span>
          <section className="paper-content">
            <p>{t ('Story')}</p>
            <br />
            <p>{t ('Story1')}</p>
            <br />
            <p>{t ('Story3')}</p>
            
            <br />
            <br/>
            <p className="paper-signature">Ivan Vasilev</p>
          </section>
        </div>

        <Container className="about-mobile">
          <Head title={t ('AboutHead')} small />
          <Row>
            <Col size="12" className="mt-1 mb-5 ">
              <MDBCard>
                <MDBCardHeader
                  color="indigo lighten-1"
                  style={{fontSize: '1.5rem'}}
                >
                  {t ('About')}
                </MDBCardHeader>
                <MDBCardBody>
                
                    <p>{t ('Story')}</p>
                    <p>{t ('Story1')}</p>
                    <p>{t ('Story2')}</p>
                    <p>{t ('Story3')}</p>
              
                    <span className="paper-signature font-weight-bold">Ivan Vasilev</span>
                
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withNamespaces () (MyStory);
