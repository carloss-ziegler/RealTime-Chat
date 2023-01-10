import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Background from "../assets/backImage.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (email && password) {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password)
        .then((_userCredentials) => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={Background} style={styles.backImage} />
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
          <Text style={styles.title}>Log In</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator color="#f5f5f5" />
            ) : (
              <>
                <Text
                  style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}
                >
                  Log In
                </Text>
              </>
            )}
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}
              >
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <StatusBar barStyle="light-content" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
