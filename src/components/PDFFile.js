import "../App.css";
import React from "react";
import { Page, Text, View, Document,  StyleSheet} from "@react-pdf/renderer";
import PDFEntete from "../components/PDFEntete";
import PDFProfile from "../components/PDFProfile";
import ExperiencePDF from "./ExperiencePDF";
import PDFCompTech from "./PDFCompTech";
import PDFCompTechGlobal from "./PDFCompTechGlobal";
import PDFKnowledge from "./PDFKnowledge";
import PDFEducation from "./PDFEducation";
import commonStyles from "./commonStyles";


const PDFFile = (props) => {
  const { data, experiences, knowledges, competences, educations } = props;
 
  const selectedColor = data.selectedColor;

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 0,
      marginLeft: 12,
      marginRight: 12,
      size: "A4",
    },
    columnSection: {
      flexDirection: "row",
    },
   
    Rectangle: {
      width: Infinity,
      height: 200,
      backgroundColor: "green",
    },
    column: {
      width: "50%",
    },
    columnExperience: {
      width: '85%',
      padding: 10,
    },
  });

  return (
    <Document>
      <Page style={{...styles.body, backgroundColor: "white" }}>
        <PDFEntete
          name={data.name}
          email={data.email}
          phone={data.phone}
          selectedColor={selectedColor}
        />
        <View style={styles.columnSection}>
          <View style={styles.column}>
            <PDFProfile
              profile={data.summary}
              selectedColor={selectedColor}
            />
              <PDFKnowledge
              knowledges={knowledges}
              selectedColor={data.selectedColor}
            />
          </View>
          <View style={styles.column}>
            <PDFCompTechGlobal
              compTechGlobal={data.compTechGlobal}
              selectedColor={selectedColor}
            />
            <PDFCompTech competences={competences} />
          </View>
        </View>

        <Text style={{...commonStyles.title, color: selectedColor, textAlign: 'left', marginLeft: 12}}>
          EMPLOIS OCCUPÉS ET MANDATS CONFIÉS
        </Text>
        {experiences.map((exp, index) => (
          <View style={styles.columnSection}>
            <View style={styles.columnExperience}>
              <ExperiencePDF
                experience={exp}
                key={index}
                selectedColor={data.selectedColor}
              ></ExperiencePDF>
            </View>
          </View>
        ))}
        <View>
          <PDFEducation
            educations={educations}
            selectedColor={data.selectedColor}
          ></PDFEducation>
        </View>

        <Text
          style={commonStyles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
