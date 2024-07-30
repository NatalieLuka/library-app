import { View, Text, StyleSheet, Pressable } from "react-native";
import { globalStyles } from "../../../styles/gobalStyles";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { useState, useEffect } from "react";

const API = "https://boot-library.onrender.com/books";

export default function BooksDetailsPage() {
  const [foundBook, setFoundBook] = useState(null);
  const { bookid } = useLocalSearchParams();
  // const foundBook = books.find((book) => {
  //   return book.id === bookid;
  // });

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(API + "/" + bookid);
        const data = await response.json();

        setFoundBook(data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    }

    if (bookid) {
      loadData();
    }
  }, [bookid]);

  if (!foundBook) {
    return (
      <>
        <Text>Book not found </Text>
      </>
    );
  }

  return (
    <View style={globalStyles.pageContainer}>
      <View style={styles.detailContainer}>
        <Text style={globalStyles.heading}>{foundBook.title}</Text>
        <Text style={globalStyles.paragraph}>{foundBook.author}</Text>

        <View style={styles.imageContainer}>
          <Image source={foundBook.coverimage} style={styles.image} />
        </View>
      </View>
      <Pressable
        onPress={() => {
          login(`${name} `);
        }}
        style={globalStyles.button}
      >
        <Text>Borrow</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    flex: 1,
  },
});
