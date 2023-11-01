import React from "react";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { IValue } from "../../types/interfaces";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 16,
    marginBottom: 16,
    marginTop: 16,
    borderBottom: 1,
  },
  content: {
    fontSize: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
});

const PDFResume = ({ resume }: Pick<IValue, "resume">) => {
  return (
    <PDFViewer style={{ width: "100%", height: "800px" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Summary:</Text>
            <Text style={styles.name}>{resume.name}</Text>
            <Text style={styles.content}>{resume.about}</Text>

            <Text style={styles.header}>Experience:</Text>
            {resume.experience.map((exp) => (
              <View key={exp.id}>
                <Text style={styles.content}>Title: {exp.title}</Text>
                <Text style={styles.content}>
                  Company Name: {exp.companyName}
                </Text>
                <Text style={styles.content}>Location: {exp.location}</Text>
                <Text style={styles.content}>
                  Description: {exp.description}
                </Text>
                <Text style={styles.content}>
                  {exp.startDay} - {exp.endDay}
                </Text>
              </View>
            ))}

            <Text style={styles.header}>Skills:</Text>
            {resume.skills.skillsName.map((skill, i) => (
              <View key={skill.skill + i}>
                <Text style={styles.content}>{skill.skill} - {skill.range}%</Text>
              </View>
            ))}
            <Text style={styles.content}></Text>
            <Text style={styles.header}>Education:</Text>
            {resume.education.map((edu) => (
              <View key={edu.id}>
                <Text style={styles.content}>
                  Diploma: {edu.diploma}, University: {edu.university},   
                  {edu.startDay} -  {edu.endDay}
                </Text>
              </View>
            ))}

            <Text style={styles.header}>Contacts:</Text>
            <Text style={styles.content}>Phone: {resume.contacts.phone}</Text>
            <Text style={styles.content}>
              LinkedIn: {resume.contacts.linkedin}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFResume;
