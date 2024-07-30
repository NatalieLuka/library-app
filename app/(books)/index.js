import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { books } from "../../data/books";

export default function BooksPage() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={globalStyles.paragraph}>{item.title}</Text>
        <Text style={globalStyles.paragraph}>{item.author}</Text>
        <Link style={globalStyles.paragraph} href={item.id}>
          View more details
        </Link>
      </View>
    );
  };

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
});
