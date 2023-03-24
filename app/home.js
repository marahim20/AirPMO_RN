import React, { useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Image = require("../assets/th.jpeg");
import { useEffect } from "react";

import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-web";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://api.airpmo.co:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Email: username,
          domain_name: "app.airpmo.co",
          Password: password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.access_token) {
        console.log("Successful login");
        await AsyncStorage.setItem("data", JSON.stringify(json));
        console.log(await AsyncStorage.getItem("data"));
        router.push("/activities");
      } else {
        console.log("no successful login");
        ToastAndroid.show("Login Failed", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error(error);
      ToastAndroid.show("Login Failed", ToastAndroid.SHORT);
    }
  };

  return (
    <ImageBackground source={Image} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.heading}>airpmo</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(255,255,255,0.8)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
  },
  container: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Home;
