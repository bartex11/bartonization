import React from 'react';
import PropTypes from 'prop-types';
import Animation from './Animation';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import styled from 'styled-components';

const PageHeading = styled.h1`

  margin: 3rem auto 2rem auto;
  width: max-content;
  border-top: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding: 0 20px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  font-family: 'Open Sans',sans-serif;
  line-height: 1.3;
  font-weight: 700;

`;

class Headline extends React.Component {
  render () {
    const {title, blue, red, animate, small} = this.props;

    const styles = {
      color: red ? 'red' : blue ? 'blue' : '',
      fontSize: small ? '2rem' : '3rem',
    };

    if (animate) {
      return (
        <Container>
          <Row>
            <Col>
              <Animation type="bounce">
                <PageHeading className={this.props.className} style={styles}>
                  {title}{this.props.children}
                </PageHeading>
              </Animation>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container>
        <Row>
          <Col>
            <PageHeading className={this.props.className} style={styles}>
              {title}{this.props.children}
            </PageHeading>
          </Col>
        </Row>
      </Container>
    );
  }
}

Headline.defaultProps = {
  title: 'Headline',
};

Headline.propTypes = {
  title: PropTypes.string,
};

export default Headline;
