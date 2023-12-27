import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import MyCustomFont from "../fonts/Anton-Regular.ttf";

const PDFProfile = (props) => {
  const { profile, selectedColor } = props;

  Font.register({
    family: "AntonFamily",
    src: MyCustomFont,
  });

  const styles = StyleSheet.create({
    textTitle: {
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 12,
      fontSize: "20px",
      textAlign: "justify",
      fontFamily: "AntonFamily",
      color: selectedColor,
    },
    textProfile: {
      paddingTop: 0,
      paddingBottom: 20,
      paddingHorizontal: 30,
      fontSize: "14px",
      textAlign: "justify",
    },
  });

  return (
    <View>
      {profile ? (
        <View>
          <Text style={styles.textTitle}>PROFIL</Text>
          <Text style={styles.textProfile}>{profile}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default PDFProfile;
