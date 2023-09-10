import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { StyledButton } from "../components/StyledButton";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/welcome.png")}
          resizeMode="contain"
        />
      </View>
      <StyledButton onPress={() => router.push("/medication_detail")}>Start</StyledButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
  },
});
