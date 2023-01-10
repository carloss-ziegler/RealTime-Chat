import React, { useEffect } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import colors from "../colors";
import { StatusBar } from "expo-status-bar";
const catImageUrl =
  "https://cdn.imgbin.com/1/3/9/imgbin-hamburger-button-computer-icons-menu-navigation-menu-DcaJkNsQ036hGMXJW8ankHy7T.jpg";

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color={colors.gray}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => (
        <Entypo name="menu" size={24} color={colors.primary} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.chatButton}
      >
        <Entypo name="chat" size={24} color={colors.lightGray} />
      </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    position: "absolute",
    bottom: 24,
    right: 12,
  },
});
