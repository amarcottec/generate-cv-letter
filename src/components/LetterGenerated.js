import "../App.css";
import { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PaletteColorPicker from "./PaletteColorPicker ";
import PDFLetterFile from "./PDFLetterFile";


function LetterGenerated(props) {
  const [globalInfo, setglobablInfo] = useState({
    name: "",
    phone: "",
    email: "",
    compagny: "",
    date: "",
    titlePoste: "",
    technologieRequise: "",
    selectedColor: 'green',
  });
  
  // Ajoutez d'autres champs de CV ici

  const handleChange = (e) => {
    const { name, value } = e.target;
    setglobablInfo({ ...globalInfo, [name]: value });
  };

  const updateSelectedColor = (newColor) => {
    setglobablInfo({ ...globalInfo, selectedColor: newColor });
  };
 
  return (
    <div>
      <h1>Générateur de Lettre</h1>
      <div className="container">
        <div className="column-left">
          <PaletteColorPicker OnUpdateSelectedColor={updateSelectedColor} />
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            onChange={handleChange}
          />
          <textarea
            name="date"
            placeholder="Date"
            onChange={handleChange}
          />
          <textarea
            name="compagny"
            placeholder="compagny"
            onChange={handleChange}
          />
            <textarea
            name="titlePoste"
            placeholder="titre Poste"
            onChange={handleChange}
          />
            <textarea
            name="technologieRequise"
            placeholder="Technologie requise"
            onChange={handleChange}
          />
        </div>
        <div className="columns-right">
          <PDFViewer style={{ height: "100%" }}>
            <PDFLetterFile data={globalInfo} />
          </PDFViewer>
        </div>
      </div>
      <PDFDownloadLink
       
        document={<PDFLetterFile data={globalInfo} />}
        fileName="generatedLetter"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download")}
      </PDFDownloadLink>
    </div>
  );
}

export default LetterGenerated;
