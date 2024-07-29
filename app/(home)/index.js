import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";

export default function HomePage() {
  return (
    <>
      <Text style={globalStyles.heading}>I am the Homepage</Text>
      <Link style={globalStyles.paragraph} href="books">
        Find books
      </Link>
      <Link style={globalStyles.paragraph} href="books/mybooks">
        My Books
      </Link>
    </>
  );
}
