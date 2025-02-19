import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import Footer from './Footer';

function Projects() {
    const [projects, setProject] = useState([]);
    useEffect(() => {
        axios.get("data.json")
            .then((res) => {
                setProject(res.data.projects)
            })
    }, [])

    return (
        <>
            <section className="allprojectsec">
                <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">All Projects</h3>
                <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
                <Container>
                    <Row>
                        {projects.map((project) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={project.id}>
                                <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
                                    <div className="project-card">
                                        <img 
                                            src={project.photo} 
                                            alt={project.title} 
                                            className="project-img wow zoomIn" 
                                            data-aos="zoom-in" 
                                            data-aos-duration="1500" 
                                            data-aos-delay="200"
                                        />
                                        <h5 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s">{project.title}</h5>
                                        <p className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.7s">{project.description}</p>
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="wow flipInX" 
                                            data-wow-duration="2s" 
                                            data-wow-delay="1s"
                                        >
                                            View
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default Projects;
