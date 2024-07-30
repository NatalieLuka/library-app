import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { Image } from "expo-image";

// import { books } from "../../data/books";

const API = "https://boot-library.onrender.com/books";

// item = book

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={globalStyles.paragraph}>{item.title}</Text>
      <Text style={globalStyles.paragraph}>{item.author}</Text>
      <Image src={item.coverimage} style={styles.image} />
      <Link style={globalStyles.paragraph} href={item.id}>
        View more details
      </Link>
    </View>
  );
};

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(API);
        const data = await response.json();
        // console.log(data);
        setBooks(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={globalStyles.heading}>Find your favorite Book</Text>
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
