import { StyleSheet } from "@react-pdf/renderer";
import MyCustomFont from "../fonts/Anton-Regular.ttf";
import { Font } from "@react-pdf/renderer";


Font.register({
  family: "AntonFamily",
  src: MyCustomFont,
});

const commonStyles = StyleSheet.create({
  bulletPoint: {
    flexDirection: "row",
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    marginRight: 5,
    marginLeft: 12,
  },
  textParaphaph: {
    marginBottom: 8,
  },
  text: {
    marginLeft: 12,
    fontSize: 12,
    textAlign: "justify",
    color: "black",
  },
  textBold: {
    marginLeft: 12,
    fontSize: 12,
    textAlign: "justify",
    color: "black",
    fontWeight: "bold",
    fontFamily: "AntonFamily",
  },
  textTitle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    fontSize: 20,
    textAlign: "justify",
    fontFamily: "AntonFamily",
  },
  textProfile: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    fontSize: "14px",
    textAlign: "justify",
  },
  title: {
    fontSize: 20,
    marginLeft: 12,
    marginBottom: 10,
    textAlign: "left",
    fontFamily: "AntonFamily",
  },
  titleJob: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 12,
    textAlign: "left",
    color: "black",
    fontFamily: "AntonFamily",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontFamily: "AntonFamily",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "AntonFamily",
  },
  textBoldUnderline: {
    marginLeft: 12,
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "AntonFamily",
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  
});

export default commonStyles;
