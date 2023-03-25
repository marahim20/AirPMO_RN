import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

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
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen />
      {loading ? (
        <View>
          <Text style={{ flex: 1 }}>Loading...</Text>
        </View>
      ) : (
        <View>
          <Text style={{ flex: 1 }}>{projectName}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default addemp;
