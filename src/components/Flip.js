import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import styled from 'styled-components';

import './Flip.css';

const Image = styled.img``;

class Flip extends React.Component {
  componentDidMount() {
    $(function() {
      $('.material-card > .mc-btn-action').click(function() {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
          card.removeClass('mc-active');

          window.setTimeout(function() {
            icon.removeClass('fa-arrow-left').removeClass('fa-spin-fast').addClass('fa-bars');
          }, 800);
        } else {
          card.addClass('mc-active');

          window.setTimeout(function() {
            icon.removeClass('fa-bars').removeClass('fa-spin-fast').addClass('fa-arrow-left');
          }, 800);
        }
      });
    });
  }
  render() {
    const { src, width, height, alt } = this.props;

    return (
      <div class="member-item material-card">
        <h2>
          <span>aöalal</span>
          <strong>sdasfsd</strong>
        </h2>

        <div class="mc-content">
          <div class="img-container">
            <Image src={src} className="img-member" />
          </div>

          <div class="mc-description">asfasasfa</div>
        </div>

        <a class="mc-btn-action">
          <i class="fa fa-bars" />
        </a>
        <div class="mc-footer">
          <p>lfslfsfl</p>
        </div>
      </div>
    );
  }
}

Flip.defaultProps = {
  src: '',
  alt: 'image',
};

Flip.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

/*  HOW TO USE <Flip src="./images/Askora/1.jpg" text="asa, dad" />  */

/* import Flip from '../components/Flip'; */
export default Flip;
