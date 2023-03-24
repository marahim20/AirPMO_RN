import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

getProjects = async () => {
  let listOfProjects = [];
  try {
    const value = await AsyncStorage.getItem("data");
    if (value !== null) {
      const data = JSON.parse(value);
      const token = data.access_token;
      const organization_id = data.user.organization_id;

      console.log("getting list of projects..." + organization_id);
      let url =
        "http://app.airpmo.co:8000/api/organization/" +
        organization_id +
        "/project";
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      };
      let response = await axios.get(url, { headers });
      if (response.status === 200) {
        console.log("successfully obtained projects....");
        return response.data;
      } else {
        return null;
      }
    }
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

export default getProjects;
