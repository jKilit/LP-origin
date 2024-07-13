import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './courseContent.scss';

const CourseContent = ({ content }) => {
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
                  <li key={idx}>{lesson}</li>
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
