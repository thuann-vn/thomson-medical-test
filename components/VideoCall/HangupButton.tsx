import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Colors from "../../constants/Colors";

interface HangupButtonProps extends TouchableOpacityProps {
  icon: string
}

export function HangupButton(props: HangupButtonProps) {
  return <TouchableOpacity {...props} style={[styles.container, props.style]}>
    <FontAwesome5 name={props.icon} style={styles.icon} size={32}/>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    padding: 16,
    width: 70,
    height: 70,
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
