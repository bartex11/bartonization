import React from "react";

import "./MyStory.css";
import View from '../components/View';
import Mask from '../components/Mask';
import Container from '../components/Container';
import Row from '../components/Row';
import Button from '../components/Button';
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const NavLink = require("react-router-dom").NavLink;

class HomePage extends React.Component {
  render() {
    return (
      <div class="paper-background">
        <span class="coffee-stain"></span>

        <section class="paper-content">
          <p>Hello Reddit!</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci id dui congue volutpat. Phasellus eget sem ac eros congue porttitor. Nullam vehicula iaculis eros, vitae lacinia ante eleifend et. Phasellus elit tellus, pellentesque sit amet facilisis elementum, vulputate at justo. Nunc dapibus erat ac justo gravida, vitae vehicula purus congue. Aliquam id erat at tellus pretium suscipit. Quisque sit amet ultrices erat. Nam quis turpis ut leo condimentum consequat non id neque. Donec id massa neque. Proin rutrum sagittis enim nec sagittis.</p>
          <p>Donec tristique mauris dolor, finibus posuere leo tristique ut. Phasellus tristique, nisi volutpat placerat aliquet, sem urna faucibus ex, in blandit nulla ligula ut arcu. Donec at tellus vel arcu elementum venenatis semper commodo enim. Aenean eget orci ut elit suscipit mattis. Proin dignissim dui sem, consectetur scelerisque augue tincidunt eu. Suspendisse rhoncus sem a metus fermentum efficitur. Duis feugiat metus eu arcu scelerisque, vitae accumsan dolor malesuada. Duis tincidunt quis dolor vitae tristique. Integer erat lectus, ultricies nec est et, ullamcorper vestibulum diam. Ut mauris ligula, tincidunt mollis dapibus porttitor, vestibulum id erat. Vivamus velit velit, tincidunt nec nisl ac, accumsan efficitur metus.</p>
        </section>
      </div>
    );
  }
}

export default HomePage;
