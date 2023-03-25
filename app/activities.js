import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import React, { Component, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { Icon } from "@rneui/themed";
import retrieveData from "../libs/retrieveData.js";
import getProjects from "../libs/getProjects.js";
import getTasks from "../libs/getTasks.js";
import getJobCard from "../libs/getJobCard.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const activities = () => {
  const router = useRouter();
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [organization_id, setOrganization_id] = useState("");
  const [user_id, setUser_id] = useState("");
  const [project_id, setProject_id] = useState("");

  let info;
  let projects;
  let tasks;
  let jobCard;
  useEffect(() => {
    async function fetcher() {
      info = await retrieveData();
      projects = await getProjects();
      // tasks = await getTasks();
      // jobCard = await getJobCard();
      // console.log("info: ", info);
      // console.log("projects: ", projects);
      // console.log("tasks: ", tasks);
      // console.log("jobCard: ", jobCard);
    }
    fetcher();
  }, []);

  const handleSelect = async (task) => {
    console.log("taskname: ", task);
    //   console.log(typeof task);
    await AsyncStorage.setItem("project", task);
    const project = await AsyncStorage.getItem("project");
    console.log("project: ", project);
    router.push("/addemp");
  };

  // let tasks = getTasks(token, project_id, organization_id);
  // console.log("tasks: ", tasks);

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
      description: "Concrete Protections",
    },

    {
      id: 6,
      name: "CD2-1015",
      description: "Back Filling and Grading",
    },

    {
      id: 7,
      name: "CD2-1016",
      description: "PCC Work",
    },

    {
      id: 8,
      name: "CD2-1017",
      description: "Form Work for Footing",
    },

    {
      id: 9,
      name: "CD2-1018",
      description: "Rebar work for Footing",
    },

    {
      id: 10,
      name: "CD2-1019",
      description: "Casting of Footing",
    },

    {
      id: 11,
      name: "CD2-1020",
      description: "Rebar fixing for Pedestal",
    },
    {
      id: 12,
      name: "CD2-1021",
      description: "FORM WORK FOR PEDESTAL",
    },
    {
      id: 13,
      name: "CD2-1022",
      description: "CASTING OF PEDESTAL",
    },

    {
      id: 14,
      name: "CD2-1023",
      description: "WATER PROOFING",
    },
    {
      id: 15,
      name: "CD2-1024",
      description: "BACKFILLING",
    },
    {
      id: 16,
      name: "CD2-1025",
      description: "EXCAVATION",
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
      {
        <ScrollView showsVerticalScrollIndicator={false}>
          {Tasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              onPress={() => {
                handleSelect(task.description);
              }}
            >
              <View
                style={{
                  padding: 20,
                  display: "flex",
                  backgroundColor: "#f2f2f2",
                  borderRadius: 10,
                  flexDirection: "row",
                  margin: 4,
                  marginLeft: 10,
                  marginRight: 10,
                  gap: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: 500, width: 70 }}>
                  {task.name}
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: 500, color: "#808080" }}
                >
                  |
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  {task.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      }
    </SafeAreaView>
  );
};

export default activities;
