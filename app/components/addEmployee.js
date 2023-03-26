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

const addEmployee = () => {
  const router = useRouter();
  const [numberOfHours, setNumberOfHours] = useState("No. of hours");
  const [remarks, setRemarks] = useState("Remarks");

  const [selectedEmployee, setSelectedEmployee] = useState("Select Employee");
  const handleClick = async () => {
    const data = {
      selectedEmployee,
      numberOfHours,
      remarks,
    };
    await AsyncStorage.setItem("employee", JSON.stringify(data));
    router.push("/addemp");
  };

  const employees = [
    {
      label: "NOOR RAHMAN MOHAMMAD MASOOD",
      value: "NOOR RAHMAN MOHAMMAD MASOOD",
    },
    { label: "ADEBOYE IGE", value: "ADEBOYE IGE" },
    { label: "ANEESH KUMAR", value: "ANEESH KUMAR" },
    { label: "INDRA KUMAR", value: "INDRA KUMAR" },
    { label: "JAGJIT SINGH", value: "JAGJIT SINGH" },
    { label: "MOHAMMAD IQBAL", value: "MOHAMMAD IQBAL" },

    { label: "SAQIB HUSSAIN", value: "SAQIB HUSSAIN" },
    // { label: "Employee 11", value: "Employee 11" },
    // { label: "Employee 12", value: "Employee 12" },
    // { label: "Employee 13", value: "Employee 13" },
    // { label: "Employee 14", value: "Employee 14" },
    // { label: "Employee 15", value: "Employee 15" },
    // { label: "Employee 16", value: "Employee 16" },
    // { label: "Employee 17", value: "Employee 17" },
    // { label: "Employee 18", value: "Employee 18" },
    // { label: "Employee 19", value: "Employee 19" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#808080" }}>
      <Stack.Screen
        options={{
          headerTitle: "Add Employee Details",
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
            Select Employee
          </Text>
          <SelectList
            data={employees}
            setSelected={(val) => setSelectedEmployee(val)}
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

export default addEmployee;
