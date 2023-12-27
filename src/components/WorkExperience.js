import React, { useState, useEffect } from "react";

const WorkExperience = ({
  sendExperiences,
  saveDataTrigger,
  deleteDataTrigger,
}) => {
  const [experiences, setExperiences] = useState([
    {
      jobTitle: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      tasksDescriptions: [""],
      techEnvironment: "",
    },
  ]);

  useEffect(() => {
    if (deleteDataTrigger) {
      localStorage.setItem("experiences", JSON.stringify(experiences));
    }
  }, [deleteDataTrigger]);

  useEffect(() => {
    if (deleteDataTrigger) {
      setExperiences([]);
    }

    if (saveDataTrigger) {
      localStorage.setItem("experiences", JSON.stringify(experiences));
    }
  }, [saveDataTrigger, experiences]);

  useEffect(() => {
    const experiencesData = localStorage.getItem("experiences");
    if (experiencesData) {
      setExperiences(JSON.parse(experiencesData));
    }
  }, []);

  useEffect(() => {
    sendExperiences(experiences);
  }, [experiences]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        jobTitle: "",
        companyName: "",
        location: "",
        startDate: "",
        endDate: "",
        tasksDescriptions: [""],
        techEnvironment: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
    sendExperiences(newExperiences);
  };

  const handleInputChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
    sendExperiences(newExperiences);
  };

  const handleTaskChange = (experienceIndex, taskIndex, value) => {
    const newExperiences = [...experiences];
    newExperiences[experienceIndex].tasksDescriptions[taskIndex] = value;
    setExperiences(newExperiences);
    sendExperiences(newExperiences);
  };

  const handleAddTask = (experienceIndex) => {
    const newExperiences = [...experiences];
    newExperiences[experienceIndex].tasksDescriptions.push("");
    setExperiences(newExperiences);
    sendExperiences(newExperiences);
  };

  const handleRemoveTask = (experienceIndex, taskIndex) => {
    const newExperiences = [...experiences];
    newExperiences[experienceIndex].tasksDescriptions.splice(taskIndex, 1);
    setExperiences(newExperiences);
    sendExperiences(newExperiences);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      {experiences.map((experience, experienceIndex) => (
        <div key={experienceIndex}>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={experience.jobTitle}
            onChange={(e) =>
              handleInputChange(experienceIndex, "jobTitle", e.target.value)
            }
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={experience.location}
            onChange={(e) =>
              handleInputChange(experienceIndex, "location", e.target.value)
            }
          />
          <input
            type="text"
            name="companyName"
            placeholder="company Name"
            value={experience.companyName}
            onChange={(e) =>
              handleInputChange(experienceIndex, "companyName", e.target.value)
            }
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={experience.startDate}
            onChange={(e) =>
              handleInputChange(experienceIndex, "startDate", e.target.value)
            }
          />
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={experience.endDate}
            onChange={(e) =>
              handleInputChange(experienceIndex, "endDate", e.target.value)
            }
          />

          {experience.tasksDescriptions.map((task, taskIndex) => (
            <div
              key={taskIndex}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="text"
                value={task}
                placeholder="Task Description"
                onChange={(e) =>
                  handleTaskChange(experienceIndex, taskIndex, e.target.value)
                }
              />
              <button
                onClick={() => handleRemoveTask(experienceIndex, taskIndex)}
              ></button>
            </div>
          ))}
          <button onClick={() => handleAddTask(experienceIndex)}>+</button>
          <input
            type="text"
            name="techEnvironment"
            placeholder="technicaL Environment"
            value={experience.techEnvironment}
            onChange={(e) =>
              handleInputChange(
                experienceIndex,
                "techEnvironment",
                e.target.value
              )
            }
          />

          <button onClick={() => removeExperience(experienceIndex)}>-</button>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
};

export default WorkExperience;
