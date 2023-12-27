import "../App.css";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import PDFEntete from "./PDFEntete";
import commonStyles from "./commonStyles";

const PDFLetterFile = (props) => {
  const { data } = props;

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
      padding: 10,
    },
    columnText: {
      width: "90%",
      padding: 10,
    },

   
  });

  return (
    <Document>
      <Page style={{ ...styles.body, backgroundColor: "white" }}>
        <PDFEntete
          name={data.name}
          email={data.email}
          phone={data.phone}
          selectedColor={selectedColor}
        />
        <Text style={styles.header} fixed></Text>
        <View style={styles.columnSection}>
          <View style={styles.column}></View>
          <View style={{...styles.column, lineHeight: 2}}>
            <Text style={commonStyles.text}>{data.compagny}</Text>
            <Text style={commonStyles.text}>{data.date}</Text>
            <Text style={commonStyles.text}>Object: {data.titlePoste}</Text>
          </View>
        </View>

        <View style={styles.columnSection}>
          <View style={styles.columnText}>
            <Text style={{...commonStyles.text, lineHeight: 3}}>Monsieur, Madame,</Text>
            <Text style={{...commonStyles.text, lineHeight: 1.5}}>
              Je désire porter ma candidature pour le poste de {data.titlePoste}. j’ai une solide expérience et bonne motivation comme
              programmeur avec les technologies comme {data.technologieRequise}. 
              J’ai plusieurs fois travaillé avec la méthodologie Agile et j’ai même été scrum master
              lors de mon emploie chez Dental Wings. 
              Je pense que mon expérience et mes connaissances étendues des
              technologies modernes ferait de moi un bon candidat pour joindre
              votre équipe. Je travaille bien en équipe et je m’adapte très bien
              aux changements. J'ai une facilé pour apprendre rapidement de nouvelles technologies.
            </Text>
            <Text style={{...commonStyles.text, paddingTop: 20}}>
            sincèrement,
            </Text>
            <Text style={{...commonStyles.text, paddingTop: 20, textAlign: 'right'}}>
            André Marcotte
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFLetterFile;
