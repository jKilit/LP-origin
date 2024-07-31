import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import ModuleForm from "../moduleForm/ModuleForm";
import apiRequest from "../../lib/apiRequest";
import "./courseForm.scss";
import CloudinaryUploadWidget from "../../components/uploadWidget/uploadWidget";
import { useNavigate } from "react-router-dom";

const CourseForm = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [imageUrl, setImages] = useState();
  const [courseDescription, setCourseDescription] = useState("");
  const [priceValue, setPrice] = useState("");
  const [modules, setModules] = useState([
    { title: "", lessons: [{ title: "", text: "", links: [], files: [] , videoUrl: ""}] },
  ]);
  const [activeModule, setActiveModule] = useState(null);
  const Navigate = useNavigate();

  const addModule = () => {
    setModules([
      ...modules,
      { title: "", lessons: [{ title: "", text: "", links: [], files: [] , videoUrl: ""}] },
    ]);
  };

  const handleModuleChange = (index, newModule) => {
    console.log("Updating module in CourseForm:", index, "with:", newModule); // Debugging line
    const updatedModules = modules.map((module, idx) =>
      idx === index ? newModule : module
    );
    setModules(updatedModules);
  };

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  const handleSubmit = async () => {
    const courseData = {
      title: courseTitle,
      image: imageUrl,
      price: parseFloat(priceValue),
      description: courseDescription,
      modules: modules.map((module) => ({
        title: module.title,
        lessons: module.lessons.map((lesson) => ({
          title: lesson.title,
          content: lesson.text,
          url: lesson.videoUrl,
        })),
      })),
    };

    try {
      const response = await apiRequest.post(
        "/courses/createCourse",
        courseData
      );
      console.log("Course created successfully:", response.data);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const createCourse = () => {
    handleSubmit();
    Navigate("/courses");
  };
  const handleImageUpload = (e) => {
    e.preventDefault();
  }

  return (
    <Form className="course-form" onSubmit={handleSubmit}>
      <Form.Group controlId="courseTitle">
        <Form.Label>Course Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter course title"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="courseDescription">
        <Form.Label>Course Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter course description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price $</Form.Label>
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Enter course price"
          value={priceValue}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <div onClick={handleImageUpload}>
        <CloudinaryUploadWidget
          uwConfig={{
            cloudName: "dsyolmgmq",
            uploadPreset: "Learning Platform",
            multiple: true,
            maxImageSize: 20000000,
            folder: "avatars",
          }}
          setState={setImages}
          text="Upload Images"
        />
      </div>

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
      {imageUrl && (
        <div className="image-preview">
          <img src={imageUrl} alt={`Course image`} />
        </div>
      )}

      <div className="buttons">
        <Button variant="primary" onClick={addModule}>
          Add Module
        </Button>

        <Button
          variant="success"
          type="submit"
          className="submit-button"
          onClick={createCourse}
        >
          Create Course
        </Button>
      </div>
    </Form>
  );
};

export default CourseForm;
