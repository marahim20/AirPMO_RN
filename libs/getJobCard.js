import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

getJobCard = async () => {
  let listOfJobs = [];
  try {
    const value = await AsyncStorage.getItem("data");
    if (value !== null) {
      const data = JSON.parse(value);
      const token = data.access_token;
      const user_id = data.user.id;
      let url =
        "http://app.airpmo.co:8000/api/find_job_card_by_project/" + user_id;
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      };
      let response = await axios.get(url, { headers });
      if (response.status === 200) {
        console.log("successfully obtained job cards....");
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

export default getJobCard;
