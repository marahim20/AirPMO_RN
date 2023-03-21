import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Stack, useSearchParams } from "expo-router";
import { Icon } from "@rneui/themed";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Image = require("../assets/icon.png");
const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('data');
    if (value !== null) {
      console.log('Retrieved data:', JSON.parse(value));
      const data = JSON.parse(value);
      const token = data.access_token;
      const organization_id = data.user.organization_id;
      const user_id = data.user._id;
      console.log("token", token);
      console.log("organization_id", organization_id);
      console.log("user_id", user_id);
    }
  }
  catch (error) {
    console.log("Error:", error);
    return null;
  }
}
const activities = () => {
  
  async function getProjects(token, organization_id) {
    try {
      var projectsJson;
      var aProject;
      let listOfProjects = [];

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

      console.log("Response:", response.data);

      if (response.status === 200) {
        console.log("successfully obtained projects....");
        projectsJson = response.data;
        for (aProject in projectsJson) {
          listOfProjects.push(MyProject.fromJson(aProject));
        }
        let len = listOfProjects.length;
        console.log("number of projects = ", len);
        return listOfProjects;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  }

  const MyProjects = getProjects(token, organization_id);

  const project_id = "J725";

  async function getTasks(token, project_id, organization_id) {
    try {
      var tasksJson;
      var aTask;
      let listOfTasks = [];
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
      console.log("Response:", response.data);
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
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  }

  const MyTasks = getTasks(token, project_id, organization_id);
  console.log("MyTasks", MyTasks);

  const Tasks = [
    {
      id: 1,
      name: "CD2-1010",
      description: "Removal of Gravel",
    },
    {
      id: 2,
      name: "CD2-1011",
      description: "Excavation",
    },
    {
      id: 3,
      name: "CD2-1012",
      description: "Sheet Piling",
    },
    {
      id: 4,
      name: "CD2-1013",
      description: "Excavation",
    },
    {
      id: 5,
      name: "CD2-1014",
      description: "CONCRETE PROTECTIONS",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#006a4e",
            shadowColor: "transparent",
            borderBottomRightRadius: 30,
            height: 150,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerShadowVisible: false,
          headerLeft: () => {},
          headerRight: () => (
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <Icon name="person" size={24} color="#006a4e" />
            </TouchableOpacity>
          ),
          headerTitle: "Activities",
        }}
      />
      <View
        style={{
          padding: 20,
          display: "flex",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: 600 }}>
          Project: FOT VLCC Connectivity
          {/* TODO: Add name of activity here */}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ gap: 10 }}>
        {Tasks.map((task) => (
          <View
            style={{
              padding: 20,
              display: "flex",
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
              margin: 20,
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 500 }}>{task.name}</Text>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>
              {task.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default retrieveData;
