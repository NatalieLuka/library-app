// app/contact.js
import { View, Text, Pressable, Button } from "react-native";
import { Link, router } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";
import { useUser } from "../../context/UserContext";

export default function MybooksPage() {
  const { user, login, logout } = useUser();
  return (
    <>
      <View>
        <Text style={globalStyles.paragraph}>
          User: {user ? user.name + " " + user.id : "Not logged in"}
        </Text>
        <Text style={globalStyles.heading}> My borrowed Books </Text>
        {/* {cart.map((item, index) => (
          <Text key={index}>{item}</Text> */}
        {/* ))} */}

        <Pressable style={globalStyles.button}>
          <Text>Return Book</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            logout();
          }}
          title="Logout"
          style={globalStyles.button}
        >
          <Text>Logout</Text>
        </Pressable>
      </View>
    </>
  );
}
