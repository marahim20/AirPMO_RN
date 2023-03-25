import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Icon } from "@rneui/themed";

const addemp = () => {
  const [loading, setLoading] = useState(true);
  const [projectName, setProjectName] = useState(null);

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
            fontSize: 20,
          },
          headerLeft: () => (
            <Icon
              name="arrow-left"
              size={20}
              color="#fff"
              style={{ marginLeft: 10 }}
            />
          ),
          headerStyle: {
            backgroundColor: "#006a4e",
            borderBottomRightRadius: 20,
          },
          headerTintColor: "#fff",
        }}
      />
    </SafeAreaView>
  );
};

export default addemp;
