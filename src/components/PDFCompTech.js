import React from "react";
import { Text, View} from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

const PDFCompTech = (props) => {
  const {competences } = props;

  return (
    <View>
      {competences.map((comp, index) => (
        <View key={index} style={commonStyles.textParaphaph}>
          <Text style={commonStyles.textBoldUnderline}>{comp.compTitle}:</Text>
          <Text style={{...commonStyles.text, marginRight: 40}}>{comp.compDescription}</Text>
        </View>
      ))}
    </View>
  );
};

export default PDFCompTech;
