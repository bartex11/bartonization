import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Animation from './Animation';

import styled from 'styled-components';

const Test = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 100px;
    grid-template-areas: "image-container text-container";

`;
const Image = styled.img`

`;

const TextBlock = styled.div`
grid-area: text-container;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f0e9;

`;
const ImageBlock = styled.div`
  grid-area: image-container;

`;

class ImgText extends React.Component {
  render () {
    const {
      src,
      width,
      height,
      text,
      alt,
      round,
      circle,
      thumb,
      blue,
      red,
      animate,
      small,
      className,
    } = this.props;

    const classes = classNames (
      round ? 'img-rounded' : false,
      circle ? 'img-circle' : false,
      thumb ? 'img-thumbnail' : false,
      'img-responsive',
      className
    );

    const imageStyles = {
      color: red ? 'red' : blue ? 'blue' : '',
    };
    const textStyles = {
      fontSize: small ? '.7rem' : '',
    };

    if (animate) {
      return (
        <Animation type="bounce">
          <Test className={classes} style={imageStyles}>
            <ImageBlock>
              <Image src={src} alt={alt} width={width} height={height} />
            </ImageBlock>
            <TextBlock>
              <p className={this.props.className} style={textStyles}>{text} </p>
            </TextBlock>
          </Test>
        </Animation>
      );
    }
    return (
      <Test className={this.props.className} style={imageStyles}>
        <ImageBlock>
          <Image src={src} alt={alt} width={width} height={height} />
        </ImageBlock>

        <TextBlock>
          <p className={this.props.className} style={textStyles}>{text} </p>
        </TextBlock>

      </Test>
    );
  }
}

ImgText.defaultProps = {
  src: '',
  alt: 'image',
  width: '200',
  height: '100',
};

ImgText.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImgText;
