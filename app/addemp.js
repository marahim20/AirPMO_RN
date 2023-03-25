import { useEffect } from "react";
import { View } from "react-native-web";

const addemp = () => {
  let projectName;
  useEffect(() => {
    async function fetcher() {
      projectName = await AsyncStorage.getItem("project");
    }
    fetcher();
  }, []);
  return (
    <View>
      <Text>{projectName}</Text>
    </View>
  );
};

export default addemp;
