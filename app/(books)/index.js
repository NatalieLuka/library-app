import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";

export default function BooksPage() {
  return (
    <>
      <Text style={globalStyles.heading}>I am the books page</Text>
      <Link style={globalStyles.paragraph} href="/books/2">
        View details of Book 2
      </Link>
      <Link style={globalStyles.paragraph} href="/books/1">
        View details of Book 1
      </Link>
    </>
  );
}
