import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Container, Row, Col } from 'mdbreact';
import styled, {ThemeProvider} from 'styled-components';

import Headline from '../components/Headline';
import Headline1 from '../components/Headline1';

import DefaultTheme from "../DefaultTheme";


const HeadlineStyled = styled(Headline)`

    color: ${props => props.theme.colors.primary};
    border: 3px solid ${props => props.theme.colors.warning};

`;

const HeadlineStyled1 = styled(Headline1)`
    && {
    color: ${props => props.theme.colors.success};
  }

`;

export default () => (
  <ThemeProvider theme={DefaultTheme}>
    <Container style={{marginTop: '3rem'}}>
      <Row>
        <Col>
          <Tabs style={{marginTop: '3rem'}}>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>
            <TabPanel>
              <HeadlineStyled animate title="LOL"/>
            </TabPanel>
            <TabPanel>
              <HeadlineStyled1 as={'h2'}>ddddddddddddddddd</HeadlineStyled1>
            </TabPanel>
          </Tabs>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);
