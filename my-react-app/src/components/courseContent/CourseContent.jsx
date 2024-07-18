import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./courseContent.scss";

const CourseContent = ({ content }) => {
  console.log(content);
  return (
    <div className="course-content">
      <h2>Course Content</h2>
      <Accordion>
        {content.map((module, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{module.title}</Accordion.Header>
            <Accordion.Body>
              <ul>
                {module.lessons.map((lesson, idx) => (
                  <div>
                    {lesson.title && <li key={idx}>{lesson.title}</li>}
                    {lesson.content && <li> {lesson.content}</li>}
                    {lesson.videoUrl && <li> {lesson.videoUrl}</li>}
                    {/* Add files here later */}
                  </div>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseContent;
