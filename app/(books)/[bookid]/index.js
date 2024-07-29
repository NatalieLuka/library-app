import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/gobalStyles";
import { useLocalSearchParams } from "expo-router";

const books = [
  {
    id: "1",
    name: "Buch 1",
  },
  {
    id: "2",
    name: "Buch 2",
  },
];

export default function BooksDetailsPage() {
  const { bookid } = useLocalSearchParams();
  console.log("Hallo");
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
      <Text style={globalStyles.heading}>Hi, my name is {foundBook.name}</Text>
    </View>
  );
}
