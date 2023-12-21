import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { users } from "./src/User";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.initial}>
                <Text style={styles.initialText}>
                  {item.name.lastname.charAt(0).toUpperCase()}
                  {item.name.firstname.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={styles.details}>
                <Text style={styles.name}>
                  {item.name.lastname}, {item.name.firstname}
                  {item.name.middlename ? `, ${item.name.middlename}.` : ""}
                </Text>
                <Text style={styles.address}>{item.address}</Text>
              </View>
              <Icon name="dots-three-horizontal" size={40} color="black" />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  content: {
   
    justifyContent: "flex-end",
   
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  address: {
    color: "black",
    fontSize: 15,
  
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  initial: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#329ad4",
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  initialText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
});