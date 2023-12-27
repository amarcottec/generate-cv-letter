import React from "react";
import { Text, View, StyleSheet} from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

const PDFCompTechGlobal = (props) => {
  const { compTechGlobal, selectedColor } = props; 
  return (
    <View>
      {compTechGlobal ? (
        <Text style={{...commonStyles.title, color: selectedColor, marginTop: 20}}>COMPÉTENCE TECHNIQUES</Text>
      ) : null}
      <Text style={{...commonStyles.text, marginBottom: 10, marginRight: 40}}>{compTechGlobal}</Text>
    </View>
  );
};

export default PDFCompTechGlobal;
