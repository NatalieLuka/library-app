import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";
import { COLORS } from "../../styles/constants";
import { useState } from "react";
import { Foundation, MaterialIcons } from "@expo/vector-icons";

export default function HomePage() {
  const [name, setName] = useState("");

  return (
    <>
      <Text style={globalStyles.heading}>Welcome to the library App</Text>
      <Text style={globalStyles.paragraph}>
        Sign up to find your favorite books
      </Text>
      <View style={styles.loginContainer}>
        <Text style={globalStyles.paragraph}>
          Login <MaterialIcons name="login" size={24} color="white" />
        </Text>
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          style={styles.textInput}
        />
        <Pressable
          onPress={() => {
            console.log(`Username: ${name} `);
          }}
          title="Submit"
          style={styles.button}
        >
          <Text>Submit</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    gap: 10,
    marginTop: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: "100%",
    height: 40,
    borderRadius: 6,
    padding: 8,
    fontSize: 18,
    color: COLORS.primary,
  },

  button: {
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
  },
});
