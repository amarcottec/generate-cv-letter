import React, { useEffect } from "react";
import { useState } from "react";

const CompetenceTech = ({ sendCompetences, deleteDataTrigger, saveDataTrigger }) => {
  const [competences, setCompetences] = useState([
    { compTitle: '', compDescription: '' },
  ]);

  useEffect(() =>{
    if(deleteDataTrigger){
      localStorage.setItem("competences", JSON.stringify(competences));
    }
    
  }, [deleteDataTrigger])
  

  useEffect(() =>{

    if (deleteDataTrigger) {
      setCompetences([]);
    }

    if(saveDataTrigger){
      localStorage.setItem("competences", JSON.stringify(competences));
    }
  }, [saveDataTrigger]);

  useEffect(() =>{
    const competencesData = localStorage.getItem("competences");
    if (competencesData) {
      setCompetences(JSON.parse(competencesData));
    }

  }, [])

  useEffect(() =>{
    sendCompetences(competences);
  }, [competences])


  const handleInputChange = (index, field, value) => {
    const newCompetences = [...competences];

    newCompetences[index][field] = value;
    setCompetences(newCompetences);
    sendCompetences(newCompetences);
  };

  const addCompetence = () => {
    setCompetences([...competences, { compTitle: '', compDescription: '' }]);
  };

  const removeCompetence = (index) => {
    const newCompetences = [...competences];
    newCompetences.splice(index, 1);
    setCompetences(newCompetences);
    sendCompetences(newCompetences);
  };

 
  return (
    <div>
      <h2>Skills</h2>
      {competences.map((competence, index ) => (
        <div key={index}>
          <input
            type="text"
            name="compTitle"
            placeholder="Skill Title"
            value={competence.compTitle}
            onChange={(e) =>
              handleInputChange(index, 'compTitle', e.target.value)
            }
          />
          <input
            type="text"
            name="compDescription"
            placeholder="Skill Description"
            value={competence.compDescription}
            onChange={(e) =>
              handleInputChange(index, 'compDescription', e.target.value)
            }
          />
          <button onClick={() => removeCompetence(index)}>-</button>
        </div>
      ))}
      <button onClick={addCompetence}>Add skill</button>
    </div>
  );
};

export default CompetenceTech;
