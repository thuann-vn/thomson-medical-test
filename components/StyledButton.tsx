import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function StyledButton(props: TouchableOpacityProps) {
  return <TouchableOpacity {...props} style={[styles.container, props.style]}>
    <Text style={styles.label}>{props.children}</Text>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a2c48",
    width: '100%',
    borderRadius: 8,
    padding: 16
  },
  label:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 24,
    fontSize: 16
  }
});
