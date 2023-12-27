import React from "react";
import { Text, View} from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

const PDFEducation = (props) => {
  const {educations, selectedColor } = props;
 
  return (
    <View>
      <Text style={{...commonStyles.title, color: selectedColor, textAlign: 'left', marginLeft: 12}}>SCOLARITÉ</Text>
      {educations && educations.map((education, index) => (
        <View key={index} style={commonStyles.textParaphaph}>
          <Text style={commonStyles.textBold}>
          {education.degreName};{education.diplomaName}| {education.startYear}-{education.endYear}
          </Text>
          <Text style={commonStyles.text}>{education.schoolName}, {education.location}</Text>
        </View>
      ))}
    </View>
  );
};

export default PDFEducation;
