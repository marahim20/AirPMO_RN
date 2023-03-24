import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const getTasks = async () => {
  let listOfTasks = [];
  try {
    const value = await AsyncStorage.getItem("data");
    if (value !== null) {
      const data = JSON.parse(value);
      const token = data.access_token;
      const organization_id = data.user.organization_id;
      const project_id = "628e554cd49157759a5e0e35";
      const _id = data.user._id;
      console.log("getting list of tasks..." + project_id);
      let url =
        "http://app.airpmo.co:8000/api/find_all_assign_card_by_user/" +
        _id +
        "/" +
        project_id;
      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      };
      let response = await axios.get(url, { headers });
      if (response.status === 200) {
        console.log("successfully obtained tasks....");
        tasksJson = response.data;
        for (aTask in tasksJson)
          if (aTask.project_id == project_id)
            listOfTasks.push(MyTask.fromJson(aTask));
        let len = listOfTasks.length;
        console.log("number of tasks = ", len);
        return listOfTasks;
      } else {
        return null;
      }
    }
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
};

export default getTasks;

//     }
//     let url =
//       "http://app.airpmo.co:8000/api/organization/" +
//       organization_id +
//       "/project";
//     let headers = {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//     };
//     let response = await axios.get(url, { headers });
//     if (response.status === 200) {
//       console.log("successfully obtained tasks....");
//       tasksJson = response.data;
//       for (aTask in tasksJson)
//         if (aTask.project_id == project_id)
//           listOfTasks.push(MyTask.fromJson(aTask));
//       let len = listOfTasks.length;
//       console.log("number of tasks = ", len);
//       return listOfTasks;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log("Error:", error);
//     return null;
//   }
// };

// export default getTasks;
