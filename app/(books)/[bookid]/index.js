import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/gobalStyles";
import { useLocalSearchParams } from "expo-router";
import { books } from "../../../data/books";

export default function BooksDetailsPage() {
  const { bookid } = useLocalSearchParams();
  const foundBook = books.find((book) => {
    return book.id === bookid;
  });

  if (!foundBook) {
    return (
      <>
        <Text>Book not found </Text>
      </>
    );
  }

  return (
    <View style={globalStyles.pageContainer}>
      <Text style={globalStyles.heading}>Hi, my name is {foundBook.title}</Text>
    </View>
  );
}
