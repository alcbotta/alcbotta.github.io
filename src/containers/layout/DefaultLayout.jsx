// https://medium.com/@cgroom/a-software-engineers-one-page-portfolio-4f85ab8a20d1
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import avatar from "../../assets/images/perfil.jpg";
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
                            <NavItem active={isActive("interests")}>
                                <NavLink href="#interests">{t("navbar.projects")}</NavLink>
                            </NavItem>

                            <NavItem active={isActive("contact")}>
                                <NavLink href="#contact">{t("navbar.contactme")}</NavLink>
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
                    <div className="spacer2">  <br /></div>

                </div>

                <div className="body">

                    <div className="left">
                        <div>
                            I am a software engineer with almost three years of experience.
                            Moved from Brazil, where I used to work with Machine Learning and Big Data, to Australia
                            and since then have been working as a full stack software engineer.
                            In this period, I developed many new skills with technologies such as: Docker, ReactJS, Spring Boot,
                             Golang and other.
                                 </div>

                        <div>
                            I am comfortable dealing directly with clients, gathering requirements and, from them,
                            designing, implementing and delivering the solution for the problem.
                                 </div>

                    </div>
                    <div className="right">
                        <h4>Most recent highlight</h4>
                        Designed and implemented an inteire software system to manage the many aspects of the businees,
                                including: Orders Status, Commissions, Customer Relationship, Project Management and other features.
                                This project reduced drastically errors made the users, when projects were managed using spreadsheet,
                                improved precision and it fits the need of the company, rather than being a generic software.
                    </div>
                </div>
            </section>

            <section className="custom-section" id="interests">
                <div className="title">
                    <h2>INTERESTS</h2>
                    <div className="spacer2">  <br /></div>

                </div>
                <div className="body">
                    <div className="left">
                        <ul>
                            <li><strong>Machine Learning:</strong> I have worked with machine learning for a couple of years now.
                            It started with developing a model to predict the ball position on a Robot Soccer match;
                            next I studied and applied different ML algorithms for Number Plate Recognition with Computer
                            Vision; after that, professionally, when I was the leader of a project to develop a ML model
                                to detect fault windmills, allowing a faster repair and reduce down time.  </li>
                            <li><strong>IoT:</strong> I am really excited about all the possibilities
                            around IoT. I have worked with it before, and intend to work with it again
                            in the future.</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h3>Other Things </h3>
                        <li>I held a CCNA (Cisco Certified Network Associated) from 2016 to 2019.

                        </li>
                        <li>Occasionally I write on <a href="https://medium.com/@alcbotta" className="default-icon-size"
                            rel="noopener noreferrer" target="_blank">
                            Medium
                        </a>, about different things that I find interesting.  </li>

                    </div>
                </div>

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
                            <Button className="send-button">Send</Button>

                        </Form>

                    </Container>
                </div>
            </section>

        </div >
    );

}



export default DefaultLayout;
