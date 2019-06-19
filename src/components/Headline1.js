import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  margin-top: 110px;
  margin-bottom: 0;
`;

export default props => {
  const WrapperWithAnotherTag = props.as && props.as !== 'h1'
    ? Wrapper.withComponent (props.as)
    : Wrapper;

  return (
    <WrapperWithAnotherTag className={props.className}>
      {props.children}
    </WrapperWithAnotherTag>
  );
};
