import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/gobalStyles";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";

const API = "https://boot-library.onrender.com/books";

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
      <Text style={globalStyles.heading}>{foundBook.title}</Text>
      <Text style={globalStyles.heading}>{foundBook.author}</Text>
      <Image src={foundBook.coverimage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
