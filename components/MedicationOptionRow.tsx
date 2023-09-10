import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from "react-native";


interface MedicationOptionRowProps extends ViewProps {
    right?: Function;
    icon?: React.JSX.Element;
    title: string
  }

export function MedicationOptionRow(props: MedicationOptionRowProps) {
  return <View {...props} style={[styles.container, props.style]}>
    {
        props.icon ? <View style={styles.iconContainer}>{props.icon }</View>: null
    }
    <Text style={styles.title}>{props.title}</Text>
    {
        props.right ? <View style={styles.rightContainer}>{props.right()}</View> : null
    }
  </View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: '100%',
    borderRadius: 16,
    padding: 14,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  title:{
    flex: 1,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#1a2c48'
  },
  iconContainer:{
    marginRight: 10,
    width: 40,
    alignItems: 'center'
  },
  rightContainer:{
    
  }
});
