import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import styled from 'styled-components';
import classNames from 'classnames';

import './Flip.scss';

const Image = styled.img``;

class Flip extends React.Component {
  componentDidMount () {}

  constructor (props) {
    super (props);
    this.state = {addClass: false};
  }

  toggle () {
    this.setState ({addClass: !this.state.addClass});
  }

  render () {
    const {
      src,
      alt,
      header,
      subHeader,
      description,
      footer,
      className,
      btn,
    } = this.props;

    let boxClass = ['member-item material-card'];
    let btnClass = ['fa fa-bars'];
    if (this.state.addClass) {
      boxClass.push ('mc-active');
      btnClass.pop ();
      btnClass.push ('fa fa-spin-fast');
      btnClass.pop ();
      btnClass.push ('fa fa-arrow-left');
    }

    const classes = classNames (btn, 'mc-btn-action', className);
    const classHeader = classNames (header, className);
    const classFooter = classNames (header, 'mc-footer', className);

    return (
      <div className={boxClass.join (' ')}>
        <h2 className={classHeader}>
          <span>{header}</span>
          <strong>{subHeader}</strong>
        </h2>

        <div className="mc-content">
          <div className="img-container">
            <Image src={src} alt={alt} className="img-member" />
          </div>

          <div className="mc-description">{description}</div>
        </div>

        <div className={classes} onClick={this.toggle.bind (this)}>
          <i className={btnClass.join (' ')} />
        </div>
        <div className={classFooter}>
          <p>{footer}</p>
        </div>
      </div>
    );
  }
}

Flip.defaultProps = {
  src: '',
  alt: 'image',
  header: 'Header',
  subHeader: 'Sub header',
  description: 'Description',
  footer: 'Footer',
};

Flip.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

/*  HOW TO USE <Flip src="./images/Askora/1.jpg" text="asa, dad" />  */

/* import Flip from '../components/Flip'; */
export default Flip;
