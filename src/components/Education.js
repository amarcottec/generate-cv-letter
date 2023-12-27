import React from "react";
import { useState, useEffect } from "react";

const Education = ({ sendEducations, saveDataTrigger, deleteDataTrigger }) => {
  const [educations, setEducations] = useState([
    {
      schoolName: "",
      degreName: "",
      diplomaName: "",
      startYear: "",
      endYear: "",
      location: "",
    },
  ]);

  useEffect(() => {
    if (deleteDataTrigger) {
      localStorage.setItem("educations", JSON.stringify(educations));
    }
  }, [deleteDataTrigger]);

  useEffect(() => {
    if (deleteDataTrigger) {
      setEducations([]);
    }

    if (saveDataTrigger) {
      localStorage.setItem("educations", JSON.stringify(educations));
    }
  }, [saveDataTrigger, deleteDataTrigger, educations]);

  useEffect(() => {
    const educationsData = localStorage.getItem("educations");
    if (educationsData) {
      setEducations(JSON.parse(educationsData));
    }
  }, []);

  useEffect(() => {
    sendEducations(educations);
  }, [educations]);

  const handleInputChange = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    setEducations(newEducations);
    sendEducations(newEducations);
  };

  const removeEducation = (index) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    setEducations(newEducations);
    sendEducations(newEducations);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        schoolName: "",
        degreName: "",
        diplomaName: "",
        startYear: "",
        endYear: "",
        location: "",
      },
    ]);
  };

  return (
    <div>
      <h2>Education:</h2>
      {educations.map((education, index) => (
        <div key={index}>
          <input
            type="text"
            name="schoolName"
            placeholder="School Name:"
            value={education.schoolName}
            onChange={(e) =>
              handleInputChange(index, "schoolName", e.target.value)
            }
          />
          <input
            type="text"
            name="degreName"
            placeholder="Degree Name:"
            value={education.degreName}
            onChange={(e) =>
              handleInputChange(index, "degreName", e.target.value)
            }
          />
          <input
            type="text"
            name="diplomaName"
            placeholder="Diploma Name:"
            value={education.diplomaName}
            onChange={(e) =>
              handleInputChange(index, "diplomaName", e.target.value)
            }
          />
          <input
            type="text"
            name="startYear"
            placeholder="start Year:"
            value={education.startYear}
            onChange={(e) =>
              handleInputChange(index, "startYear", e.target.value)
            }
          />
          <input
            type="text"
            name="endYear"
            placeholder="End Year:"
            value={education.endYear}
            onChange={(e) =>
              handleInputChange(index, "endYear", e.target.value)
            }
          />
          <input
            type="text"
            name="location"
            placeholder="Location:"
            value={education.location}
            onChange={(e) =>
              handleInputChange(index, "location", e.target.value)
            }
          />
          <button onClick={() => removeEducation(index)}>-</button>
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
};

export default Education;
