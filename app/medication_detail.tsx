import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet } from "react-native";

import { Text, View, Switch } from "../components/Themed";
import { MedicationOptionRow } from "../components/MedicationOptionRow";
import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useState } from "react";
import { StyledButton } from "../components/StyledButton";
import { useRouter } from "expo-router";
import moment from "moment";

export default function MedicationDetail() {
  const [enabledNotification, setEnabledNotification] = useState(false)
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/medication_icons/vitamin_c.png")}
        style={styles.icon}
      />
      <Text style={styles.title}>Vitamin C</Text>
      <View style={styles.optionsContainer}>
        <MedicationOptionRow
          title="Everyday at 9:00"
          icon={<Ionicons name="notifications" size={20} />}
          right={() => <Switch value={enabledNotification} onValueChange={setEnabledNotification}/>}
        />
        <MedicationOptionRow
          title="Before meal"
          icon={<Octicons name="dot-fill" size={24} color={Colors.red} />}
        />
        <MedicationOptionRow
          title="Finish course"
          icon={<FontAwesome5 name="calendar-times" />}
          right={()=><View style={styles.finish_course_date}><Text style={styles.finish_course_label}>{moment().add(10, 'day').format('MMM DD')}</Text></View>}
        />
      </View>
      <View style={styles.nextButtonContainer}>
        <StyledButton onPress={()=> router.push('/doctor_selection')}>Request refill</StyledButton>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    width: 200,
    height: 160,
    resizeMode: "contain",
  },
  optionsContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 30,
    flex: 1
  },
  finish_course_date:{
    alignItems: 'center',
    backgroundColor: '#d9dbe0',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    position: 'absolute',
    right: -3,
    top: -20
  },
  finish_course_label:{
    fontWeight: 'bold'
  },
  nextButtonContainer:{
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '100%'
  }
});
