import React from 'react';

import {MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer} from 'mdbreact';

class BackgroundImage extends React.Component {
  render () {
    return (
      <div id="background-image">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Make purchases with our app{' '}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </h6>
                  <MDBBtn color="white">Download</MDBBtn>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </div>

              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default BackgroundImage;
