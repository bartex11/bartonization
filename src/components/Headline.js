import React from 'react';
import PropTypes from 'prop-types';
import {Animation} from 'mdbreact';

class Headline extends React.Component {

  render () {
    const {title, blue, red, animate} = this.props;
   
    const styles = {
      fontSize: '2rem',
      color: red?'white':blue?'blue':''
    }

    if (animate) {
      return (
        <Animation type="bounce">
          <h1  className={this.props.className} style={styles}>
            {title}{this.props.children}
          </h1>
        </Animation>
      );
    }
    return (
      <h1 className={this.props.className} style={styles}>
        {title}{this.props.children}
      </h1>
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
