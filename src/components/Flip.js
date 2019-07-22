import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import styled from 'styled-components';
import classNames from 'classnames';

import './Flip.scss';

const Image = styled.img``;

class Flip extends React.Component {
  componentDidMount () {
    $ (function () {
      $ ('.material-card > .mc-btn-action').click (function () {
        var card = $ (this).parent ('.material-card');
        var icon = $ (this).children ('i');
        icon.addClass ('fa-spin-fast');

        if (card.hasClass ('mc-active')) {
          card.removeClass ('mc-active');

          window.setTimeout (function () {
            icon
              .removeClass ('fa-arrow-left')
              .removeClass ('fa-spin-fast')
              .addClass ('fa-bars');
          }, 800);
        } else {
          card.addClass ('mc-active');

          window.setTimeout (function () {
            icon
              .removeClass ('fa-bars')
              .removeClass ('fa-spin-fast')
              .addClass ('fa-arrow-left');
          }, 800);
        }
      });
    });
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

    const classes = classNames (btn, 'mc-btn-action', className);
    const classHeader = classNames (header, className);
    const classFooter = classNames (header, 'mc-footer', className);

    return (
      <div className="member-item material-card">
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

        <div className={classes}>
          <i className="fa fa-bars" />
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
