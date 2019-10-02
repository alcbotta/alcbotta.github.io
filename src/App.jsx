import React, { Component } from 'react';
import avatar from "./assets/img/perfil.jpg";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button, Media } from 'reactstrap';

import './App.css';
import Certifications from './Certification';

import utfprLogo from './assets/img/utfpr_logo.webp';
import uobLogo from './assets/img/uob_logo.png';

const defaultHeaderHeight = 130;
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      headerHeight: defaultHeaderHeight,
      headerClassname: "header-default-height header-default-font-size"
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.onMouseEnterTopContainer = this.onMouseEnterTopContainer.bind(this);
    this.onMouseLeaveTopContainer = this.onMouseLeaveTopContainer.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    const navLinks = document.querySelectorAll(".Navbar__Link__Right");
    const sections = document.querySelectorAll(".custom-section");
    navLinks.forEach(nav => nav.classList.remove("Navbar__Link__Active"));

    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 100 &&
        window.pageYOffset <= section.offsetTop + section.offsetHeight - 100) {
        var shouldBeActiveSection = document.getElementById("navbar-" + section.id);
        if (shouldBeActiveSection) {
          shouldBeActiveSection.classList.add("Navbar__Link__Active")
        }
      }
    });
  }




  onMouseEnterTopContainer() {
    this.setState({
      topHeaderAdditionalInfo: true
    })
  }

  onMouseLeaveTopContainer() {
    this.setState({
      topHeaderAdditionalInfo: false
    })
  }

  hideToogleMenu = () => {
    const navs = document.querySelectorAll(".Navbar__Items");

    navs.forEach(nav => console.log(nav.classList.remove("Navbar__ToggleShow")));
  }

  render() {
    return (
      <div >

        <div ref="myHeaderRef" className={"Navbar sticky" + this.state.headerClassname}
        >
          <div className="Navbar__Link Navbar__Link-brand">
            <div className="Navbar__Link__Title">
              <div className="element">
                Andre Botta
            </div>
              <div className="element">
                <a href="https://github.com/alcbotta"
                  className="default-icon-size" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github " aria-hidden="true"></i>
                </a>
              </div>
              <div className="element">
                <a href="https://www.linkedin.com/in/andrebotta/"
                  className="default-icon-size" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin " aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="Navbar__Link Navbar__Link-toggle"
            onClick={() => {
              const navs = document.querySelectorAll(".Navbar__Items");

              navs.forEach(nav => nav.classList.toggle("Navbar__ToggleShow"));
            }}
          >
            <i className="fa fa-bars" />
          </div>
          <nav className="Navbar__Items">

          </nav>
          <nav className="Navbar__Items Navbar__Items--right">
            <div className="Navbar__Link Navbar__Link__Right" id="navbar-about-me"><a href="#about-me" onClick={this.hideToogleMenu}>About Me</a></div>
            <div className="Navbar__Link Navbar__Link__Right" id="navbar-projects"><a href="#projects" onClick={this.hideToogleMenu}>Projects</a></div>
            <div className="Navbar__Link Navbar__Link__Right" id="navbar-education"><a href="#education" onClick={this.hideToogleMenu}> Education</a></div>

            <div className="Navbar__Link Navbar__Link__Right" id="navbar-certifications"><a href="#certifications" onClick={this.hideToogleMenu}>Certifications</a></div>
            <div className="Navbar__Link Navbar__Link__Right" id="navbar-contact-me"><a href="#contact-me" onClick={this.hideToogleMenu}>Contact Me</a></div>
          </nav>
        </div>
        <div className="main-section" ref="mainSectionRef" style={{ paddingTop: this.state.headerHeight }} >
          <img src={avatar} alt="Avatar" className="avatar-img" />

          {/* <h1>Scroll Down</h1> */}
          <h2>Andre Luiz Costantino Botta</h2>
          <h4>Full Stack Software Engineer </h4>


        </div>

        <div onClick={this.hideToogleMenu}>
          <section ref="aboutMe" className="custom-section" id="about-me">
            <div className="title">
              <h2>ABOUT ME </h2>
            </div>
            <div className="spacer2">  <br /></div>

            <Container>
              <Row>
                <Col>
                  <div className="content">
                    TODO
                  </div>
                </Col>
                <Col>
                  TODO
                </Col>
              </Row>
            </Container>

          </section>

          <section className="custom-section" id="projects">
            <div className="title">
              <h2>PROJECTS AND INTERESTS</h2>
            </div>
            <div className="spacer2">  <br /></div>

            <Container>
              <Row>
                <Col>
                  <h3>RECENT PROJECTS</h3>
                  <ul>
                    <li>

                    </li>
                    <li>TODO</li>
                    <li>TODO</li>
                  </ul>
                </Col>
                <Col>
                  <h3>RECENT PROJECTS</h3>
                  TODO

                </Col>
              </Row>
            </Container>
          </section>

          <section className="custom-section" id="education">
            <div className="title">
              <h2>EDUCATION</h2>
            </div>
            <div className="spacer2">  <br /></div>

            <Container>
              <Row>
                <Col>
                  <Media>
                    <Media left >
                      {/* <Media object data-src={utfprLogo} alt="uni logo" /> */}
                      <img width={64} height={64} src={utfprLogo} alt="thumbnail" />

                    </Media>
                    <Media body>
                      <Media heading>
                        Federal University of Technology – Parana
        </Media>
                      Computer Engineering - Five years undergraduate course
      </Media>
                  </Media>
                </Col>
                <Col>
                  <Media>
                    <Media left >
                      <img width={64} height={64} src={uobLogo} alt="thumbnail" />
                    </Media>
                    <Media body>
                      <Media heading>
                        University of Birmingham
        </Media>
                      Computer Science/Software Engineering - One year undergraduate study abroad
      </Media>
                  </Media>
                </Col>
              </Row>

            </Container>
          </section>


          <section className="custom-section" id="certifications">
            <div className="title">
              <h2>CERTIFICATIONS</h2>
            </div>
            <div className="spacer2">  <br /></div>

            <Container>
              <Row>
                <Col>
                  <Certifications />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="custom-section" id="contact-me">
            <div className="container">
              <div className="title">
                <h2>CONTACT ME</h2>
              </div>
              <div className="spacer2">  <br /></div>
              <Container>
                <Form action="https://formspree.io/alcbotta@gmail.com" method="POST" name="sentMessage" id="contactForm" noValidate>

                  <FormGroup>
                    <Label>Name</Label>
                    <Input required={true} type="text" name="contact-name" id="contact-name" placeholder="Your name" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input required type="email" name="contact-email" id="contact-email" placeholder="Your email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Message</Label>
                    <Input required type="textarea" name="contact-message" id="contact-message" placeholder="Your message" />
                  </FormGroup>
                  <Button>Send</Button>

                </Form>

              </Container>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
