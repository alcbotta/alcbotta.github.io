import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button, Media } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import Certifications from '../../components/Certifications/Certification';

import avatar from "../../assets/images/perfil.jpg";
import utfprLogo from '../../assets/images/utfpr_logo.webp';
import uobLogo from '../../assets/images/uob_logo.png';
import brFlag from "../../assets/images/br.svg";
import ausFlag from "../../assets/images/australia.svg";

const DefaultLayout = props => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeNavitem, setActiveNavitem] = useState("");
    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(true);

    const { t, i18n } = useTranslation();

    const toggle = () => setIsOpen(!isOpen);

    const changeLanguage = language => {
        i18n.changeLanguage(language);
    };


    useEffect(() => {
        const scrollHandler = event => {
            const currentScrollY = window.scrollY;

            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }

            const sections = document.querySelectorAll(".custom-section");
            // console.log(sections)

            let sectionID = ""
            sections.forEach(section => {
                if (window.pageYOffset >= section.offsetTop - 100 &&
                    window.pageYOffset <= section.offsetTop + section.offsetHeight - 100) {

                    sectionID = section.id

                }
            });

            setActiveNavitem(sectionID)

            prevScrollY.current = currentScrollY;


        };
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, [props, t, goingUp, activeNavitem]);

    const isActive = (sectionID) => {
        return activeNavitem === sectionID;
    }

    return (
        <div className="app">
            <div className={"botta-navbar " + (goingUp ? "show" : "hide")}>
                <Navbar color="light" light expand="md" fixed={"top"}>
                    <NavbarBrand>
                        <div className="botta-navbar-brand">

                            Andre Botta

                        </div>
                    </NavbarBrand>
                    <div className="botta-brand-social">
                        <a href="https://github.com/alcbotta" className="default-icon-size"
                            rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                        </a>
                        <a href="https://medium.com/@alcbotta" className="default-icon-size"
                            rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-medium fa-lg" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/andrebotta/" className="default-icon-size"
                            rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                        </a>
                    </div>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem active={isActive("about")}>
                                <NavLink href="#about">{t("navbar.aboutme")}</NavLink>
                            </NavItem>
                            <NavItem active={isActive("projects")}>
                                <NavLink href="#projects">{t("navbar.projects")}</NavLink>
                            </NavItem>
                            <NavItem active={isActive("education")}>
                                <NavLink href="#education">{t("navbar.education")}</NavLink>
                            </NavItem>
                            <NavItem active={isActive("certifications")}>
                                <NavLink href="#certifications">{t("navbar.certifications")}</NavLink>
                            </NavItem>
                            <NavItem active={isActive("contact")}>
                                <NavLink href="#contact">{t("navbar.contactme")}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    title={t("title.visitFacebook")}
                                    href="https://www.facebook.com/dijkstraai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    title={t("title.visitLinkedin")}
                                    href="https://www.linkedin.com/company/dijkstraai/about/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink onClick={() => changeLanguage("br")}>
                                    <img
                                        className="dlogo"
                                        src={brFlag}
                                        alt={"logo"}
                                        width={30}
                                        height={30}
                                    />
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink onClick={() => changeLanguage("en")}>
                                    <img
                                        className="dlogo"
                                        src={ausFlag}
                                        alt={"logo"}
                                        width={30}
                                        height={30}
                                    />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <section className="main-section"
            // ref="mainSectionRef"  
            >
                <img src={avatar} alt="Avatar" className="avatar-img" />

                <h2>Andre Luiz Costantino Botta</h2>
                <h4>Full Stack Software Engineer </h4>


            </section>
            <section
                className="custom-section"
                id="about">
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

            <section className="custom-section" id="contact">
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
    );

}



export default DefaultLayout;
