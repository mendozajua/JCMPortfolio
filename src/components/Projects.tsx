import React from 'react';
import godzilla from "../assets/img/GodzillaSleep.jpg";
import zuzu from "../assets/img/ZuzuTongueOut.jpg";
import mufasa from "../assets/img/Mufasa_cattower.jpg";
import medusa from "../assets/img/Medusa_HangingOut.jpg";
import kratos from "../assets/img/Kratos_peri_zoomedOut.jpg";
import nagini from "../assets/img/Nagini_Long.jpg";
import {Col, Container, Nav,Tab, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";
import resume from "../assets/img/Software_Engineer_Resume_JME-1.png"
import { Document, Page, pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Projects() {
    const projects = [
        {
            title: "Mufasa",
            description: "My first pet is this incredibly friendly cat named after a character from Lion King, a favorite film from my childhood.",
            imgUrl: mufasa,
        },
        {
            title: "ZuZu",
            description: "Adopted recently this sweet cat, so Mufasa could have someone to play with. She loves voicing her opinion and loves pets just as much as the next. Update: She loves pets so much she intercepts pets.",
            imgUrl: zuzu,
        },
        {
            title: "Nagini",
            description: "Meet Nagini, my Red Fancy corn snake who was named after a Harry Potter character. Although I'm uncertain of their sex, Nagini enjoys watching what's happening in the room from the comfort of their hiding spot.",
            imgUrl: nagini,
        },
        {
            title: "Kratos",
            description: "Kratos is a male Enchi Hypo ball python, named after the favorite video game character, God of War. He is the oldest snake I own, and his impressive size reflects his age.",
            imgUrl: kratos,
        },
        {
            title: "Medusa",
            description: "Meet Medusa, my Blue Eye Leucistic (BEL) female ball python. I got her as a young hatchling at just one month old. Over time, she has grown to become my most docile and easily-handled snake, making her a true joy to have in my collection",
            imgUrl: medusa,
        },
        {
            title: "Godzilla",
            description: "Meet Godzilla, my friendly normal leopard gecko. Their sex is unknown, but their love for interaction is undeniable. During feeding time, Godzilla eagerly comes to the door of their enclosure and doesn't hesitate to crawl onto my hand when offered.",
            imgUrl: godzilla,
        },
    ]
    const path = './Software_Engineer_Resume_JM.pdf'

    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Window size is ${width} x ${height}`);
    return (
        <section className="about" id="abouts">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>About Me</h2>
                        <p>Some personal things about my life that I am proud and happy to share.</p>
                        </div>}
                        </TrackVisibility>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Pets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Resume</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} title={project.title} description={project.description} imgUrl={project.imgUrl}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <section className="skill" id="skills">
                                            <Container>
                                                <Row>
                                                    <Col >
                                                        <div className="skill-bx"
                                                             style={{
                                                            width: '100%',
                                                            height:"calc(100% - 20px)", // subtracted 20px from the height
                                                            overflow:"hidden",
                                                            backgroundColor: 'white',
                                                            marginTop: 10,
                                                        }}
                                                        >
                                                            <h2 style={{color:"black"}}>
                                                                Resume
                                                            </h2>
                                                            <div className="align-items-center2">
                                                                <img src={resume} />
                                                                {/*<Document*/}
                                                                {/*    file={path}*/}
                                                                {/*    onLoadError={console.error}*/}
                                                                {/*>*/}
                                                                {/*    <Page*/}
                                                                {/*        pageNumber={1}*/}
                                                                {/*        // width={Math.min(width * 0.9, 800)}*/}
                                                                {/*        // renderTextLayer={false}*/}
                                                                {/*        // renderAnnotationLayer={false}*/}
                                                                {/*    />*/}
                                                                {/*</Document>*/}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <img className="background-image-left" src={colorSharp}/>
                                        </section>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}

export default Projects;