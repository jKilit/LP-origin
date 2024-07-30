import React from "react";
import { Form, Button } from "react-bootstrap";
import LessonForm from "../lessonForm/LessonForm";
import "./moduleForm.scss";

const ModuleForm = ({ module, index, onChange }) => {
  const addLesson = () => {
    onChange({
      ...module,
      lessons: [
        ...module.lessons,
        { title: "", text: "", links: [], files: [], videoUrl: "" },
      ],
    });
  };

  const handleLessonChange = (lessonIndex, newLesson) => {
    console.log("Updating lesson in ModuleForm:", lessonIndex, "with:", newLesson); // Debugging line
    const updatedLessons = module.lessons.map((lesson, idx) =>
      idx === lessonIndex ? newLesson : lesson
    );
    onChange({ ...module, lessons: updatedLessons });
  };

  return (
    <div className="module-form">
      <Form.Group controlId={`moduleTitle-${index}`}>
        <Form.Label>Module Title</Form.Label>
        <Form.Control
          type="text"
          value={module.title}
          onChange={(e) => onChange({ ...module, title: e.target.value })}
        />
      </Form.Group>

      <div className="lessons-section">
        {module.lessons.map((lesson, lessonIndex) => (
          <LessonForm
            lesson={lesson}
            index={lessonIndex}
            key={lessonIndex}
            onChange={(newLesson) => handleLessonChange(lessonIndex, newLesson)}
          />
        ))}
        <Button variant="secondary" onClick={addLesson}>
          Add Lesson
        </Button>
      </div>
    </div>
  );
};

export default ModuleForm;
