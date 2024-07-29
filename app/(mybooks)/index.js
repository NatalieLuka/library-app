// app/contact.js
import { View, Text, Pressable, Button } from "react-native";
import { Link, router } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";
import { useUser } from "../../context/UserContext";

export default function MybooksPage() {
  const { user, login, logout } = useUser();
  return (
    <>
      <Text style={globalStyles.heading}>My Books</Text>
      <Text>User: {user ? user.name + " " + user.id : "Not logged in"}</Text>
      <Button
        onPress={() => {
          login("Natalie");
        }}
        title="Login as Natalie"
      />
      <Button
        onPress={() => {
          login("Ralf");
        }}
        title="Login as Ralf"
      />
      <Button onPress={logout} title="Logout" />
    </>
  );
}
