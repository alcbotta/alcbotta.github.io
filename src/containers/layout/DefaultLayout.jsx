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
            <section className="main-section">
                <img src={avatar} alt="Avatar" className="avatar-img" />
                <h2>Andre Luiz Costantino Botta</h2>
                <h4>{t("avatar.jobTitle")}</h4>
            </section>
            <section
                className="custom-section"
                id="about">
                <div className="title">
                    <h2>{t("section.about.title")}</h2>
                    <div className="spacer2">  <br /></div>
                </div>
                <div className="body">
                    <div className="left">
                        <div>{t("section.about.p1")}</div>
                        <div>{t("section.about.p2")}</div>
                    </div>
                    <div className="right">
                        <h4>{t("section.highlights")}</h4>
                        <div>{t("section.highlights.p1")}</div>
                    </div>
                </div>
            </section>

            <section className="custom-section" id="interests">
                <div className="title">
                    <h2>{t("section.interests")}</h2>
                    <div className="spacer2">  <br /></div>
                </div>
                <div className="body">
                    <div className="left">
                        <ul>
                            <li><strong>Machine Learning:</strong>{t("section.interests.p1")}</li>
                            <li><strong>IoT:</strong>{t("section.interests.p2")}</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h3>{t("section.other")}</h3>
                        <li>{t("section.other.p1")}</li>
                        <li>{t("section.other.p2.1") + " "}<a href="https://medium.com/@alcbotta" className="default-icon-size"
                            rel="noopener noreferrer" target="_blank">
                            Medium
                        </a>{t("section.other.p2.2")}</li>

                    </div>
                </div>

            </section>

            <section className="custom-section" id="contact">
                <div className="container">
                    <div className="title">
                        <h2>{t("contact")}</h2>
                    </div>
                    <div className="spacer2">  <br /></div>
                    <Container>
                        <Form action="https://formspree.io/alcbotta@gmail.com" method="POST" name="sentMessage" id="contactForm" noValidate>

                            <FormGroup>
                                <Label>{t("contact.name")}</Label>
                                <Input required={true} type="text" name="contact-name" id="contact-name" placeholder={t("contact.namePlaceholder")} />
                            </FormGroup>
                            <FormGroup>
                                <Label>{t("contact.email")}</Label>
                                <Input required type="email" name="contact-email" id="contact-email" placeholder={t("contact.emailPlaceholder")} />
                            </FormGroup>
                            <FormGroup>
                                <Label>{t("contact.message")}</Label>
                                <Input required type="textarea" name="contact-message" id="contact-message" placeholder={t("contact.messagePlaceholder")} />
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
