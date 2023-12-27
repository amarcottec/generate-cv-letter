import { Text, View } from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

const ExperiencePDF = (props) => {
  const { experience } = props;

  return (
    <View>
      {experience ? (
        <View>
          <Text style={commonStyles.titleJob}> {experience.jobTitle}</Text>
          <View style={commonStyles.textParaphaph}>
            <Text style={commonStyles.text}>
              {experience.companyName}, {experience.location} |{" "}
              {experience.startDate}-{experience.endDate}
            </Text>
          </View>
        </View>
      ) : null}

      {experience.tasksDescriptions.map((task, index) => (
        <View key={index} style={commonStyles.bulletPoint}>
          <View style={commonStyles.bullet}></View>
          <Text style={commonStyles.text}>{task}</Text>
        </View>
      ))}
      {experience.techEnvironment ? (
        <Text style={{ ...commonStyles.text, textDecoration: "underline" }}>
          Environnement technologique: {experience.techEnvironment}
        </Text>
      ) : null}
    </View>
  );
};

export default ExperiencePDF;
