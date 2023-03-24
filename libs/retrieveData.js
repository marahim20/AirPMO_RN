import AsyncStorage from "@react-native-async-storage/async-storage";

retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("data");
    if (value !== null) {
      // console.log('Retrieved data:', JSON.parse(value));
      const data = JSON.parse(value);
      const token = data.access_token;
      const organization_id = data.user.organization_id;
      const user_id = data.user._id;
      // console.log("token", token);
      // console.log("organization_id", organization_id);
      // console.log("user_id", user_id);
      const info = {
        token: token,
        organization_id: organization_id,
        user_id: user_id,
      };
      return info;
    }
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

export default retrieveData;
