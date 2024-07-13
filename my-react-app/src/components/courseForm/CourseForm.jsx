import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import ModuleForm from "../moduleForm/ModuleForm";
import "./courseForm.scss";

const CourseForm = () => {
  const [modules, setModules] = useState([
    { title: "", lessons: [{ title: "", text: "", links: [], files: [] }] },
  ]);
  const [activeModule, setActiveModule] = useState(null);

  const addModule = () => {
    setModules([
      ...modules,
      { title: "", lessons: [{ title: "", text: "", links: [], files: [] }] },
    ]);
  };

  const handleModuleChange = (index, newModule) => {
    const updatedModules = modules.map((module, idx) =>
      idx === index ? newModule : module
    );
    setModules(updatedModules);
  };

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  return (
    <Form className="course-form">
      <Form.Group controlId="courseTitle">
        <Form.Label>Course Title</Form.Label>
        <Form.Control type="text" placeholder="Enter course title" />
      </Form.Group>

      <Form.Group controlId="courseDescription">
        <Form.Label>Course Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter course description"
        />
      </Form.Group>

      <div className="modules-section">
        {modules.map((module, index) => (
          <Card key={index}>
            <Card.Header>
              <Button variant="link" onClick={() => toggleModule(index)}>
                Module {index + 1}
              </Button>
            </Card.Header>
            {activeModule === index && (
              <Card.Body>
                <ModuleForm
                  module={module}
                  index={index}
                  onChange={(newModule) => handleModuleChange(index, newModule)}
                />
              </Card.Body>
            )}
          </Card>
        ))}
      </div>
      <div className="buttons">
        <Button variant="primary" onClick={addModule}>
          Add Module
        </Button>

        <Button variant="success" type="submit" className="submit-button">
          Create Course
        </Button>
      </div>
    </Form>
  );
};

export default CourseForm;
