import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "./lessonForm.scss";

const LessonForm = ({ lesson, index, onChange }) => {
  const handleTitleChange = (e) => {
    onChange({ ...lesson, title: e.target.value });
  };

  const handleTextChange = (e) => {
    onChange({ ...lesson, text: e.target.value });
  };

  const handleLinkChange = (linkIndex, newLink) => {
    const updatedLinks = lesson.links.map((link, idx) =>
      idx === linkIndex ? newLink : link
    );
    onChange({ ...lesson, links: updatedLinks });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onChange({ ...lesson, files });
  };

  const addLink = () => {
    onChange({ ...lesson, links: [...lesson.links, ""] });
  };

  const removeLink = (linkIndex) => {
    const updatedLinks = lesson.links.filter((_, idx) => idx !== linkIndex);
    onChange({ ...lesson, links: updatedLinks });
  };

  return (
    <div className="lesson-form">
      <Form.Group controlId={`lessonTitle-${index}`}>
        <Form.Label>Lesson Title</Form.Label>
        <Form.Control
          type="text"
          value={lesson.title}
          onChange={handleTitleChange}
        />
      </Form.Group>

      <Form.Group controlId={`lessonText-${index}`}>
        <Form.Label>Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={20}
          value={lesson.text}
          onChange={handleTextChange}
        />
      </Form.Group>

      <div className="links-section">
        {lesson.links.map((link, linkIndex) => (
          <Form.Group controlId={`link-${index}-${linkIndex}`} key={linkIndex}>
            <Form.Label>Link {linkIndex + 1}</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                value={link}
                placeholder="Enter URL"
                onChange={(e) => handleLinkChange(linkIndex, e.target.value)}
              />
              <Button
                variant="outline-secondary"
                onClick={() => removeLink(linkIndex)}
              >
                Remove
              </Button>
            </InputGroup>
          </Form.Group>
        ))}
        <Button variant="secondary" onClick={addLink}>
          Add Link
        </Button>
      </div>
    </div>
  );
};

export default LessonForm;
