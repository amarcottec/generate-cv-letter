import React from "react";
import { Text, View } from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

const PDFKnowledge = (props) => {
  const { knowledges, selectedColor } = props;

  return (
    <View>
      {knowledges ? (
        <Text style={{ ...commonStyles.title, color: selectedColor }}>
          CONNAISSANCES INFORMATIQUE
        </Text>
      ) : null}
      {knowledges.map((knowledge, index) => (
        <View key={index} style={commonStyles.textParaphaph}>
          <Text style={commonStyles.textBold}>{knowledge.knowledgeTitle}:</Text>
          <Text style={commonStyles.text}>{knowledge.KnowledgeDetail}</Text>
        </View>
      ))}
    </View>
  );
};

export default PDFKnowledge;
