import "../App.css";
import { useState } from "react";
import PDFFile from "./PDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PaletteColorPicker from "./PaletteColorPicker ";
import WorkExperience from "./WorkExperience";
import KnowledgeInfo from "./knowledgeInfo";
import CompetenceTech from "./CompetenceTech";
import Education from "./Education";
import { useEffect } from "react";

function CVGenerated(props) {
  const [globalInfo, setglobablInfo] = useState({
    name: "",
    phone: "",
    email: "",
    summary: "",
    compTechGlobal: "",
    selectedColor: "green",
  });

  const [deleteDataTrigger, setDeleteDataTrigger] = useState(false);
  const [saveDataTrigger, setSaveDataTrigger] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [knowledges, setKnowledges] = useState([]);
  const [competences, setCompetences] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() =>{
    
    if(deleteDataTrigger){
      localStorage.setItem("globalInfo", JSON.stringify(globalInfo));
    }
  }, [deleteDataTrigger])

  useEffect(() => {
    const savedGlobalInfo = localStorage.getItem("globalInfo");
    if (savedGlobalInfo) {
      setglobablInfo(JSON.parse(savedGlobalInfo));
    }
  }, []);

  useEffect(() => {
    setSaveDataTrigger(false);
    setDeleteDataTrigger(false);
  }, [saveDataTrigger, deleteDataTrigger]);

  // Ajoutez d'autres champs de CV ici

  const handleChange = (e) => {
    const { name, value } = e.target;
    setglobablInfo({ ...globalInfo, [name]: value });
  };

  const updateSelectedColor = (newColor) => {
    setglobablInfo({ ...globalInfo, selectedColor: newColor });
  };

  const handleWorkExperiences = (experiences) => {
    setExperiences(experiences);
  };

  const handleKnowledgeList = (knowledgeList) => {
    setKnowledges(knowledgeList);
  };

  const handleCompetenceList = (competenceList) => {
    setCompetences(competenceList);
  };

  const handleEducations = (educations) => {
    setEducations(educations);
  };

  const saveCurrentCv = () => {
    localStorage.setItem("globalInfo", JSON.stringify(globalInfo));
    setSaveDataTrigger(true);
  };

  const deleteCurrentCv = () => {
    setDeleteDataTrigger(true);
    setglobablInfo({
      name: "",
      phone: "",
      email: "",
      summary: "",
      compTechGlobal: "",
      selectedColor: "green",
    });

   
  };

  return (
    <div>
      <h1>Générateur de CV</h1>
      <div className="container">
        <div className="column-left">
          <button style={{ marginRight: 10 }} onClick={saveCurrentCv}>
            Save Current CV
          </button>
          <button onClick={deleteCurrentCv}>Delete Current CV</button>
          <PaletteColorPicker OnUpdateSelectedColor={updateSelectedColor} />
          <input
            type="text"
            name="name"
            value={globalInfo.name}
            placeholder="Nom complet"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={globalInfo.email}
            placeholder="Adresse e-mail"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={globalInfo.phone}
            placeholder="Téléphone"
            onChange={handleChange}
          />
          <textarea
            name="summary"
            placeholder="Résumé"
            value={globalInfo.summary}
            onChange={handleChange}
          />
          <textarea
            name="compTechGlobal"
            placeholder="competemce Techniques Global"
            value={globalInfo.compTechGlobal}
            onChange={handleChange}
          />
          <div>
            <CompetenceTech
              sendCompetences={handleCompetenceList}
              saveDataTrigger={saveDataTrigger}
              deleteDataTrigger={deleteDataTrigger}
            />
          </div>
          <div>
            <KnowledgeInfo
              sendKnowledgeList={handleKnowledgeList}
              saveDataTrigger={saveDataTrigger}
              deleteDataTrigger={deleteDataTrigger}
            />
          </div>
          <div>
            <WorkExperience
              sendExperiences={handleWorkExperiences}
              saveDataTrigger={saveDataTrigger}
              deleteDataTrigger={deleteDataTrigger}
            ></WorkExperience>
          </div>
          <div>
            <Education
              sendEducations={handleEducations}
              saveDataTrigger={saveDataTrigger}
              deleteDataTrigger={deleteDataTrigger}
            ></Education>
          </div>
        </div>
        <div className="columns-right">
          <PDFViewer style={{ height: "100%" }}>
            <PDFFile
              data={globalInfo}
              experiences={experiences}
              knowledges={knowledges}
              competences={competences}
              educations={educations}
            />
          </PDFViewer>
        </div>
      </div>
      <PDFDownloadLink
        document={
          <PDFFile
            data={globalInfo}
            experiences={experiences}
            knowledges={knowledges}
            competences={competences}
            educations={educations}
          />
        }
        fileName="generatedCv"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download")}
      </PDFDownloadLink>
    </div>
  );
}

export default CVGenerated;
