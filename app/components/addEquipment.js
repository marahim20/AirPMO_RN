import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { Icon } from "@rneui/themed";
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

const addEquipment = () => {
  const router = useRouter();
  const [selectedEquipment, setSelectedEquipment] =
    useState("Select Equipment");
  const [numberOfHours, setNumberOfHours] = useState("No. of hours");
  const [remarks, setRemarks] = useState("Remarks");
  const handleClick = async () => {
    const data = {
      selectedEquipment,
      numberOfHours,
      remarks,
    };
    await AsyncStorage.setItem("equipment", JSON.stringify(data));
    router.push("/addemp");
  };

  const Equipments = [
    { label: "Komatsu PC400 Bi", value: "Komatsu PC400 Bi" },
    { label: "Cat 12M", value: "Cat 12M" },
    { label: "Cat 140M", value: "Cat 140M" },
    { label: "Volvo FH16", value: "Volvo FH16" },
    { label: "Cat 800H", value: "Cat 800H" },
    { label: "Fujitsu 6353H", value: "Fujitsu 6353H" },
    { label: "Volvo FH12 T", value: "Volvo FH12 T" },
    { label: "Fujitsu 3112F", value: "Fujitsu 3112F" },
    { label: "JCB BH800", value: "JCB BH800" },
    { label: "Tata B1210", value: "Tata B1210" },
    // { label: "Equipment 11", value: "Equipment 11" },
    // { label: "Equipment 12", value: "Equipment 12" },
    // { label: "Equipment 13", value: "Equipment 13" },
    // { label: "Equipment 14", value: "Equipment 14" },
    // { label: "Equipment 15", value: "Equipment 15" },
    // { label: "Equipment 16", value: "Equipment 16" },
    // { label: "Equipment 17", value: "Equipment 17" },
    // { label: "Equipment 18", value: "Equipment 18" },
    // { label: "Equipment 19", value: "Equipment 19" },
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
            // height: "50%",
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
            // value={numberOfHours}
            onChangeText={(text) => setNumberOfHours(text)}
          />
          <TextInput
            placeholder="Remarks"
            style={{
              height: 40,
              border: "0.5px solid #808080",
              borderRadius: 5,
              padding: 10,
            }}
            value={remarks}
            onChangeText={(text) => setRemarks(text)}
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
