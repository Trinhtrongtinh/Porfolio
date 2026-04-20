import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import madnight from "../../Assets/Projects/madnight.png";
import kanban from "../../Assets/Projects/kanban.png";
import skyjet from "../../Assets/Projects/skyjet.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="primary">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="Kanban"
              description="A full-stack project management platform inspired by modern Kanban workflows, featuring a Next.js frontend and a NestJS backend with MySQL as the core database. The system supports secure authentication, workspace and board collaboration, task cards with labels-checklists-comments-attachments, real-time notifications, search, and role-based access, with scalable backend architecture and integrations such as Redis caching/rate limiting and payment-ready modules."
              ghLink="https://github.com/Trinhtrongtinh/kanban-task-management"
              demoLink="https://youtu.be/67eYXqC8xG0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skyjet}
              title="SkyJet"
              description="SkyJet is an airline ticket booking system designed as a web-based platform for flight booking and ticketing. The frontend is built with HTML, CSS, and JavaScript, while backend APIs are developed with Spring Boot 3.2.x (Java 21) and integrated with MySQL to handle user requests and data operations. The Identity service supports onboarding users, roles and permissions, and authentication."
              ghLink="https://github.com/nhavanntd31/airline_be"
              demoLink="https://www.canva.com/design/DAGDDRD1W8I/7UXXU_wqxseb2b6CnPzw-w/edit?utm_content=DAGDDRD1W8I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={madnight}
              title="MAD NIGHT"
              description="A horror game developed using Unity(C# language), featuring a storyline where players must escape from a haunted house while being pursued by a ghost. The game includes various levels, each with unique challenges and puzzles to solve."
              ghLink="https://github.com/nhavanntd31/horror"
              demoLink="https://www.facebook.com/MultimediaTechHust/videos/4056944137961613"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
