import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Stack } from "expo-router";
import { Icon } from "@rneui/themed";

const Image = require("../assets/icon.png");

export default class activities extends Component {
  render() {
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
              width: "100%",
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
                <Icon name="settings" size={20} color="#006a4e" />
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
  }
}
