import React from 'react';
import {withNamespaces} from 'react-i18next';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import './Resume.scss';

class Resume extends React.Component {
  componentDidMount () {
    document.title = 'Resume';
  }
  render () {
    const {t} = this.props;
    return (
      <section id="resume">
        <MDBContainer className="resume-container">
          <MDBRow>
            <MDBCol size="12">
              <h1>Ivan Vasilev</h1>
              <h3>Frontend Web Developer</h3>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5">
            <MDBCol size="3">
              <h2>About me</h2>
            </MDBCol>
            <MDBCol size="9" className="pl-5">
              <h5>
                Hello, my name is Ivan Vasilev. I live and work by the mantra "Never stop learning..." I’ve always been good at math and science that’s why I graduated as a
                mechanical engineer. After many years working in the logistics, I decided to learn web development. I find great interest in all new digital technologies and latest
                design practices. So I came into the world of WEB. Relatively quickly I learned the basics, because I think logically and I understand the technical part of the
                projects. I developed some projects and continue to improve them. I also made without a budget their SEO-optimization.
              </h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5">
            <MDBCol size="12" className="mb-1">
              <h2>Work Experience</h2>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-2">
            <MDBCol size="3" className="text-right">
              <h4>Spycymedia GmbH</h4>
              <h6>Januar 2017 – Jetzt</h6>
            </MDBCol>
            <MDBCol size="9" className="pl-5">
              <h3>Frontend web Deweloper</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio possimus nulla rem quasi, corrupti repellendus. Dolorem eaque quam debitis necessitatibus
                quod, accusantium ab ea corporis, tenetur mollitia porro dignissimos!
              </h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-2">
            <MDBCol size="3" className="text-right">
              <h4>Freelance</h4>
              <h6>Januar 2016 – Jetzt</h6>
            </MDBCol>
            <MDBCol size="9" className="pl-5">
              <h3>Web Deweloper</h3>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam qui nihil ipsum nostrum nobis mollitia eveniet? Cum quo dolore voluptas suscipit, autem
                necessitatibus aspernatur enim soluta perferendis odit cupiditate?
              </h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5">
            <MDBCol size="12" className="mb-1">
              <h2>Education</h2>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-2">
            <MDBCol size="3" className="text-right">
              <h4>TU Sofia</h4>
              <h6>Long Time Ago</h6>
            </MDBCol>
            <MDBCol size="9" className="pl-5">
              <h3>Magister</h3>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio possimus nulla rem quasi, corrupti repellendus. Dolorem eaque quam debitis necessitatibus
                quod, accusantium ab ea corporis, tenetur mollitia porro dignissimos!
              </h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-2">
            <MDBCol size="3" className="text-right">
              <h4>TU Sofia</h4>
              <h6>Long Time Ago</h6>
            </MDBCol>
            <MDBCol size="9" className="pl-5">
              <h3>Bachelorr</h3>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate cupiditate blanditiis impedit nam beatae veniam, ullam ducimus quam tempora optio
                voluptates nisi reiciendis iste est molestias laboriosam sed. Commodi!
              </h5>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-5">
            <MDBCol size="3" className="mb-1">
              <h2>Skills and Tools</h2>
            </MDBCol>

            <MDBCol size="9" className="pl-5 mt-2">
              <MDBRow>
                <MDBCol size="4" className="mb-1">
                  <h4 className="text-center">LANGUAGES</h4>
                  <ul>
                    <li>HTML5 - Twig, Liquid</li>
                    <li>CSS und CSS extension und preprocessor - SASS, LESS</li>
                    <li>JS(ES6)</li>
                  </ul>
                </MDBCol>
                <MDBCol size="4" className="mb-1">
                  <h4 className="text-center">FRAMEWORKS & LIBS</h4>
                  <ul>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>JS(ES6)</li>
                    <li>Symfony</li>
                    <li>Wordpress</li>
                  </ul>
                </MDBCol>
                <MDBCol size="4" className="mb-1">
                  <h4 className="text-center">ADDITIONAL</h4>
                  <ul>
                    <li>Shopify</li>
                    <li>Odoo </li>
                    <li>Git version control system</li>

                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default withNamespaces () (Resume);
