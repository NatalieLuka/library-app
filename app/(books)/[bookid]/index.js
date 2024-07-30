import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { globalStyles } from "../../../styles/gobalStyles";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { useState, useEffect } from "react";

const API = "https://boot-library.onrender.com/books";

export default function BooksDetailsPage() {
  const [foundBook, setFoundBook] = useState(null);
  const { bookid } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(API + "/" + bookid);
        const data = await response.json();

        setFoundBook(data);
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
        <Text style={globalStyles.paragraph}>
          Total stock: {foundBook.totalCopies}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={globalStyles.button}
      >
        <Text>Borrow</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Do you want to borrow this book?</Text>
          <View style={styles.modalButtons}>
            <Pressable
              style={[globalStyles.button, { width: "50%" }]}
              onPress={() => setModalVisible(false)}
            >
              <Text>Yes</Text>
            </Pressable>
            <Pressable
              style={[globalStyles.button, { width: "50%" }]}
              onPress={() => setModalVisible(false)}
            >
              <Text>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 5,
  },
});
