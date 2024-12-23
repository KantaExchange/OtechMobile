//Modify the code below. Complete the code according to the instructions provided

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Title } from "UI/Typography";


export default function PhoneNumberScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Title>Enter your phone number</Title>
      <TouchableOpacity
        onPress={() => navigation.navigate("OtpVerification")}
        style={styles.button}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
