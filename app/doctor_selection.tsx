import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "../components/Themed";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const windowDimensions = Dimensions.get("window");

export default function DoctorSelection() {
  const router = useRouter();
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Dr.Lucas",
      specialty: "Dentist, dental hygiene",
      image: require("../assets/images/doctors/1.png"),
    },
    {
      id: 2,
      name: "Dr.Matthew",
      specialty: "Dental hygiene",
      image: require("../assets/images/doctors/2.png"),
    },
    {
      id: 3,
      name: "Dr.Greg",
      specialty: "Ortodontis",
      image: require("../assets/images/doctors/3.png"),
    },
    {
      id: 4,
      name: "Dr.Eva",
      specialty: "Dentist, dental hygiene",
      image: require("../assets/images/doctors/4.png"),
    },
    {
      id: 5,
      name: "Dr.Ana",
      specialty: "Dentist",
      image: require("../assets/images/doctors/5.png"),
    },
  ]);

  useEffect(() => {
    //Write on search text changed logic here...
  }, [searchText]);

  //Add search button to header
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <FontAwesome5 name="search" size={20} style={styles.searchIcon} />
        </View>
      ),
      headerRight: () => (
        <Image
          source={require("../assets/images/video_call/patient.jpg")}
          style={styles.headerAvatar}
        />
      ),
    });
  }, []);

  //Render item
  const _renderItem = (item: any) => {
    return (
      <TouchableOpacity style={styles.row} onPress={() => router.push('/video_call')}>
        <Image source={item.image} style={styles.doctorAvatar} />
        <View style={styles.doctorNameContainer}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
        </View>
        <FontAwesome5 name="angle-right" style={styles.rightIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
      <FlatList
        data={data}
        renderItem={({ item }) => _renderItem(item)}
        keyExtractor={(item) => 'doctor_' + item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#f4f4f4'
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 10,
  },
  searchInputContainer: {
    position: "relative",
  },
  searchInput: {
    width: windowDimensions.width - 150, // Back icon and Avatar image space
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  searchIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#777",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 16,
  },
  doctorAvatar: {
    width: 48,
    height: 48,
    marginRight: 15
  },
  doctorNameContainer: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  doctorName: {
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    color: '#777'
  },
  rightIcon: {
    fontSize: 24,
    color: '#737885'
  }
});
