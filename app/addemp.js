import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { Icon } from "@rneui/themed";
import { ArrowRight, Plus } from "react-native-feather";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import AddModal from "./components/addModal";

const addemp = () => {
  const [loading, setLoading] = useState(true);
  const [projectName, setProjectName] = useState(null);
  const router = useRouter();
  useEffect(() => {
    async function fetcher() {
      const projectName = await AsyncStorage.getItem("project");
      console.log("projectName: ", projectName);
      setProjectName(projectName);
      setLoading(false);
    }
    fetcher();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{
          headerTitle: "Job Card Details",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: "#006a4e",
            // borderBottomRightRadius: 20,
          },
          headerTintColor: "#fff",
        }}
      />
      {loading ? (
        <View>
          <Text style={{ flex: 1 }}>Loading...</Text>
        </View>
      ) : (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "8%",
              borderBottom: "1px solid #808080",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {projectName}
            </Text>
          </View>
          <ScrollView
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: "#f0f0f0",
            }}
            showsVerticalScrollIndicator={false}
          >
            <View>
              <View
                style={{
                  padding: 10,
                  height: 250,
                  borderBottom: "1px solid #808080",
                  backgroundColor: "#fff",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Add Employee
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#006a4e",
                      padding: 3,
                      borderRadius: 5,
                    }}
                    onPress={() => router.push("/components/addEmployee")}
                  >
                    <Plus stroke="white" strokeWidth="2" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{ backgroundColor: "#000", flex: 1, marginTop: 10 }}
                ></View>
              </View>
              <View
                style={{
                  // justifyContent: "center",
                  // alignItems: "center",
                  padding: 10,
                  height: 250,
                  borderBottom: "1px solid #808080",
                  backgroundColor: "#fff",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Add Equipment
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#006a4e",
                      padding: 3,
                      borderRadius: 5,
                    }}
                    onPress={() => {}}
                  >
                    <Plus stroke="white" strokeWidth="2" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{ backgroundColor: "#000", flex: 1, marginTop: 10 }}
                ></View>
              </View>
              <View
                style={{
                  padding: 10,
                  height: 250,
                  borderBottom: "1px solid #808080",
                  backgroundColor: "#fff",
                  width: "100%",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Allowable vs Actual
                </Text>
                <View
                  style={{ backgroundColor: "#000", flex: 1, marginTop: 10 }}
                ></View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              width: "100%",
              height: "8%",
              backgroundColor: "#006a4e",
              justifyContent: "center",
              // alignItems: "center",
              padding: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ color: "white", fontSize: 16 }}>
                Quantity Acheived:{" "}
              </Text>
              <TextInput
                style={{
                  color: "black",
                  fontSize: 16,
                  width: 30,
                  borderBottom: "1px solid white",
                }}
              />
              <Text style={{ color: "white", fontSize: 16 }}> / 100</Text>
            </View>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: "#808080",
                borderRadius: 10,
              }}
              onPress={() => {
                router.push("/activities");
              }}
            >
              <ArrowRight
                stroke="white"
                strokeWidth="2"
                width="40"
                height="30"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default addemp;
