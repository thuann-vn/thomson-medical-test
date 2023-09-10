import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface VideoButtonProps extends TouchableOpacityProps {
  icon: string
}

export function VideoButton(props: VideoButtonProps) {
  return <TouchableOpacity {...props} style={[styles.container, props.style]}>
    <FontAwesome5 name={props.icon} style={styles.icon} size={16}/>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,.5)",
    padding: 16,
    width: 48,
    height: 48,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  icon:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
