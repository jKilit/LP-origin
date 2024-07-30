import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./courseContent.scss";
import { AuthContext } from "../../context/AuthContext";

const CourseContent = ({ content, hasAccess, isSameUser }) => {
  return (
    <div className="course-content">
      <h2>Course Content</h2>
      <Accordion>
        {content.map((module, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{module.title}</Accordion.Header>
            <Accordion.Body>
              <ul className="module-lessons">
                {module.lessons.map((lesson, idx) =>
                  hasAccess || isSameUser ? (
                    <Accordion key={idx}>
                      <Accordion.Item eventKey={idx.toString()}>
                        <Accordion.Header>{lesson.title}</Accordion.Header>
                        <Accordion.Body>
                          <div className="lesson-body">
                            <p>{lesson.content}</p>
                            {lesson.videoUrl && (
                              <div className="lesson-video">
                                <video controls>
                                  <source
                                    src={lesson.videoUrl}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            )}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ) : (
                    <li key={idx} className="lesson-title">
                      {lesson.title}
                    </li>
                  )
                )}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseContent;
