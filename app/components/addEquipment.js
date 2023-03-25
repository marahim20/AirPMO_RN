import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component, useState } from "react";
import { Stack, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "@rneui/themed";
import { SelectList } from "react-native-dropdown-select-list";

const addEquipment = () => {
  const router = useRouter();
  const [selectedEquipment, setSelectedEquipment] =
    useState("Select Equipment");
  const handleClick = async () => {
    router.push("/addemp");
  };

  const Equipments = [
    { label: "Equipment 1", value: "Equipment 1" },
    { label: "Equipment 2", value: "Equipment 2" },
    { label: "Equipment 3", value: "Equipment 3" },
    { label: "Equipment 4", value: "Equipment 4" },
    { label: "Equipment 5", value: "Equipment 5" },
    { label: "Equipment 6", value: "Equipment 6" },
    { label: "Equipment 7", value: "Equipment 7" },
    { label: "Equipment 8", value: "Equipment 8" },
    { label: "Equipment 9", value: "Equipment 9" },

    { label: "Equipment 10", value: "Equipment 10" },
    { label: "Equipment 11", value: "Equipment 11" },
    { label: "Equipment 12", value: "Equipment 12" },
    { label: "Equipment 13", value: "Equipment 13" },
    { label: "Equipment 14", value: "Equipment 14" },
    { label: "Equipment 15", value: "Equipment 15" },
    { label: "Equipment 16", value: "Equipment 16" },
    { label: "Equipment 17", value: "Equipment 17" },
    { label: "Equipment 18", value: "Equipment 18" },
    { label: "Equipment 19", value: "Equipment 19" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#808080" }}>
      <Stack.Screen
        options={{
          headerTitle: "Add Equipment Details",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 16,
          },
          headerStyle: {
            backgroundColor: "#006a4e",
          },
          headerTintColor: "#fff",
        }}
      />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "80%",
            backgroundColor: "lightgrey",
            borderRadius: 10,
            gap: 5,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Select Equipment
          </Text>
          <SelectList
            data={Equipments}
            setSelected={(val) => setSelectedEquipment(val)}
            save="value"
            maxHeight="100"
          />
          <TextInput
            placeholder="No. of hours"
            style={{
              height: 40,
              border: "0.5px solid #808080",
              borderRadius: 5,
              padding: 10,
            }}
          />
          <TextInput
            placeholder="Remarks"
            style={{
              height: 40,
              border: "0.5px solid #808080",
              borderRadius: 5,
              padding: 10,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              handleClick();
            }}
            style={{
              backgroundColor: "#006a4e",
              height: 40,
              width: "100%",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
              }}
            >
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default addEquipment;
