import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Image, Platform, StyleSheet } from "react-native";

import { Text, View, Switch } from "../components/Themed";
import { MedicationOptionRow } from "../components/MedicationOptionRow";
import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useState } from "react";
import { StyledButton } from "../components/StyledButton";
import { useRouter } from "expo-router";
import moment from "moment";
import { VideoButton } from "../components/VideoCall/VideoButton";
import { HangupButton } from "../components/VideoCall/HangupButton";
import { LinearGradient } from "expo-linear-gradient";
import { CallDuration } from "../components/VideoCall/CallDuration";

export default function MedicationDetail() {
  const router = useRouter();
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    var interval = setInterval(() => {
      setCallDuration(callDuration + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [callDuration]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/video_call/doctor.jpg")}
        style={styles.video1}
      />

      <Image
        source={require("../assets/images/video_call/patient.jpg")}
        style={styles.video2}
      />

      <LinearGradient
        colors={["rgba(0,0,0,.0)", "rgba(0,0,0,.5)", "#1a2c48"]}
        style={styles.bottomContainer}
      >
        <View style={styles.videoNameDuration}>
          <Text style={styles.doctorName}>Dr.Phil</Text>
          <CallDuration
            durationInSeconds={callDuration}
            style={styles.callDurationText}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <VideoButton
            icon="microphone"
            onPress={() => Alert.alert("Microphone button pressed!")}
          />
          <HangupButton icon="phone-alt" onPress={() => router.back()} />
          <VideoButton
            icon="camera"
            onPress={() => Alert.alert("Camera button pressed!")}
          />
        </View>
      </LinearGradient>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
  video1: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  video2: {
    width: 100,
    height: 120,
    resizeMode: "cover",
    position: "absolute",
    right: 20,
    top: 60,
    borderRadius: 12,
  },
  optionsContainer: {
    width: "100%",
    paddingHorizontal: 30,
    marginTop: 30,
    flex: 1,
  },
  finish_course_date: {
    alignItems: "center",
    backgroundColor: "#d9dbe0",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
    position: "absolute",
    right: -3,
    top: -20,
  },
  finish_course_label: {
    fontWeight: "bold",
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingBottom: 20,
    paddingTop: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "transparent",
  },
  videoNameDuration: {
    backgroundColor: "transparent",
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  doctorName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  callDurationText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    fontWeight: "bold",
  },
});
