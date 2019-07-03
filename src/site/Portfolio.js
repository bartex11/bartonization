import React from 'react';
import {translate} from 'react-i18next';

import {Container, Col, Row, MDBRow, MDBCol, MDBBtn} from 'mdbreact';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Head from '../components/PageHeading';

import './Lightbox.css';
import Lightbox from 'react-image-lightbox';

class TestPage extends React.Component {
  componentDidMount () {
    document.title = 'Portfolio';
  }
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      './images/Askora/1.jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg',
    ],
    name: [
      'Projekt 1',
      'Projekt 2',
      'Projekt 3',
      'Projekt 4',
      'Projekt 5',
      'Projekt 6',
      'Projekt 7',
      'Projekt 8',
    ],
  };
  renderImages = test => {
    let photoIndex = -1;

    const {name} = this.state;

    return test.map (imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="3" key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid z-depth-1"
              onClick={() =>
                this.setState ({photoIndex: privateKey, isOpen: true})}
            />
            <p class="text-uppercase font-weight-bold blue-grey-text mt-4">
              {name[photoIndex]}
            </p>
          </figure>
        </MDBCol>
      );
    });
  };
  render () {
    const {photoIndex, isOpen, images} = this.state;
    const {t} = this.props;

    return (
      <div>
        <Head title={t ('Portfolio')} />
        <Container
          className="mt-5 p-3"
          style={{backgroundColor: '#fff', marginBottom: '50px'}}
        >
          <h2 class="h1 text-center text-uppercase font-weight-bold pt-5 mb-3 mt-5">
            My projects
          </h2>
          <p class="text-center text-uppercase font-weight-bold">
            All about my work
          </p>
          <p class="section-description mt-5 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
            amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
            pariatur accusamus veniam. At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium
            repellat eveniet quia vitae.
          </p>
          <div className="mdb-lightbox p-3">
            <MDBRow>
              {this.renderImages (images)}
            </MDBRow>
          </div>
          {isOpen &&
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + '/' + images.length}
              onCloseRequest={() => this.setState ({isOpen: false})}
              onMovePrevRequest={() =>
                this.setState ({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })}
              onMoveNextRequest={() =>
                this.setState ({
                  photoIndex: (photoIndex + 1) % images.length,
                })}
            />}
          <MDBCol md="12" className="text-center py-4">
            <MDBBtn outline color="black"><strong>more</strong></MDBBtn>
          </MDBCol>
        </Container>

        <Container style={{marginTop: '3rem'}}>
          <Row>
            <Col>
              <Tabs style={{marginTop: '3rem'}}>
                <TabList>
                  <Tab>Freelancer</Tab>
                  <Tab>SpycyMedia</Tab>
                </TabList>
                <TabPanel>
                  <Container
                    className="mt-5 p-3"
                    style={{backgroundColor: '#fff', marginBottom: '50px'}}
                  >
                    <h2 class="h1 text-center text-uppercase font-weight-bold pt-5 mb-3 mt-5">
                      My projects
                    </h2>
                    <p class="text-center text-uppercase font-weight-bold">
                      Freelancer
                    </p>
                    <p class="section-description mt-5 pt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
                      amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
                      pariatur accusamus veniam. At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium
                      repellat eveniet quia vitae.
                    </p>
                    <div className="mdb-lightbox p-3">
                      <MDBRow>
                        {this.renderImages (images)}
                      </MDBRow>
                    </div>
                    {isOpen &&
                      <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={
                          images[
                            (photoIndex + images.length - 1) % images.length
                          ]
                        }
                        imageTitle={photoIndex + 1 + '/' + images.length}
                        onCloseRequest={() => this.setState ({isOpen: false})}
                        onMovePrevRequest={() =>
                          this.setState ({
                            photoIndex: (photoIndex + images.length - 1) %
                              images.length,
                          })}
                        onMoveNextRequest={() =>
                          this.setState ({
                            photoIndex: (photoIndex + 1) % images.length,
                          })}
                      />}
                    <MDBCol md="12" className="text-center py-4">
                      <MDBBtn outline color="black">
                        <strong>more</strong>
                      </MDBBtn>
                    </MDBCol>
                  </Container>
                </TabPanel>
                <TabPanel>
                  <Container
                    className="mt-5 p-3"
                    style={{backgroundColor: '#fff', marginBottom: '50px'}}
                  >
                    <h2 class="h1 text-center text-uppercase font-weight-bold pt-5 mb-3 mt-5">
                      Spicy
                    </h2>
                    <p class="text-center text-uppercase font-weight-bold">
                      SpycyMedia
                    </p>
                    <p class="section-description mt-5 pt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
                      amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
                      pariatur accusamus veniam. At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium
                      repellat eveniet quia vitae.
                    </p>
                    <div className="mdb-lightbox p-3">
                      <MDBRow>
                        {this.renderImages (images)}
                      </MDBRow>
                    </div>
                    {isOpen &&
                      <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={
                          images[
                            (photoIndex + images.length - 1) % images.length
                          ]
                        }
                        imageTitle={photoIndex + 1 + '/' + images.length}
                        onCloseRequest={() => this.setState ({isOpen: false})}
                        onMovePrevRequest={() =>
                          this.setState ({
                            photoIndex: (photoIndex + images.length - 1) %
                              images.length,
                          })}
                        onMoveNextRequest={() =>
                          this.setState ({
                            photoIndex: (photoIndex + 1) % images.length,
                          })}
                      />}
                    <MDBCol md="12" className="text-center py-4">
                      <MDBBtn outline color="black">
                        <strong>more</strong>
                      </MDBBtn>
                    </MDBCol>
                  </Container>
                </TabPanel>
              </Tabs>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default translate ('translations') (TestPage);
