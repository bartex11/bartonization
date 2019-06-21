import React from 'react';

import './MyStory.css';
import View from '../components/View';
import Mask from '../components/Mask';
import Container from '../components/Container';
import Row from '../components/Row';
import Button from '../components/Button';
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from 'mdbreact';

const NavLink = require ('react-router-dom').NavLink;

class HomePage extends React.Component {
  render () {
    return (
      <div class="paper-background">
        <span class="coffee-stain" />
        <span class="paper-date">
          Düsseldorf, 21.06.2019
        </span>
        <section class="paper-content">
          <p>
            Hello, my name is Ivan Vasilev. I live and work by the mantra "Never stop learning..." I’ve always been good at math and science that’s why I graduated as a mechanical engineer. After many years working in the logistics, I decided to learn web development. I find great interest in all new digital technologies and latest design practices. So I came into the world of WEB. Relatively quickly I learned the basics, because I think logically and I understand the technical part of the projects. I developed some projects and continue to improve them. I also made without a budget their SEO-optimization.
          </p><br />

          <p>
            When I am not working, I spend as much time I can with my wife and my son, who motivate me to do my best.
          </p><br />
          <p>
            I would love to participate in larger projects, to work in a team of developers where I would be able to enlarge my current skills and knowledge and learn new technologies. Currently I am looking for a full time job, but I would be glad also to join freelance projects.
          </p><br />
          <p>
            If you find my portfolio and my projects interesting, please contact me.
          </p><br /><br />
          <p class="paper-signature">Ivan Vasilev</p>
        </section>
      </div>
    );
  }
}

export default HomePage;
