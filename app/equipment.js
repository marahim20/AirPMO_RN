import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#006a4e",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 50,
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#E7E6E1",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  rowText: {
    textAlign: "center",
    color: "#000",
    flex: 1,
    fontSize: 12,
  },
  contentContainer: {
    paddingVertical: 16,
  },
});

const Table2 = () => {
  const [data, setData] = useState([
    {
      id: "AT-EQ-EX-001	",
      name: "Komatsu PC400 Bi",
      date: "2023-03-25	",
      designation: "Excavator",
      tothrs: 10,
      remarks: "rem",
    },
    {
      id: "AT-EQ-GR-001	",
      name: "Cat 12M",
      date: "2023-03-26	",
      designation: "Motor Grader",
      tothrs: 5,
      remarks: "rem",
    },
    {
      id: "AT-EQ-GR-002",
      name: "Cat 140M",
      date: "2023-03-26	",
      designation: "Motor Grader",
      tothrs: 6,
      remarks: "remdemo",
    },
    {
      id: "AT-EQ-TL-006	",
      name: "Volvo FH16	",
      date: "2023-03-26	",
      designation: "Trailer",
      tothrs: 6,
      remarks: "demoo",
    },
    {
      id: "AT-EQ-WL-002",
      name: "Cat 800H",
      date: "2023-03-26	",
      designation: "Wheel Loader/Shovel	",
      tothrs: 7,
      remarks: "remarkcat",
    },
    {
      id: "AT-EQ-HR-006	",
      name: "Fujitsu 6353H",
      date: "2023-03-26",
      designation: "Hand Roller",
      tothrs: 7,
      remarks: "remm",
    },
    {
      id: "AT-EQ-TR-003",
      name: "Volvo FH12 T",
      date: "2023-03-26",
      designation: "Truck",
      tothrs: 8,
      remarks: "truck",
    },
    {
      id: "AT-EQ-PC005	",
      name: "Fujitsu 3112F",
      date: "2023-03-26",
      designation: "Plate Compactor",
      tothrs: 7,
      remarks: "fuj",
    },
    {
      id: "AT-EQ-BH-004",
      name: "JCB BH800",
      date: "2023-03-26	",
      designation: "Back Hoe",
      tothrs: 8,
      remarks: "jcb",
    },
    {
      id: "AT-EQ-BU-004	",
      name: "Tata B1210	",
      date: "2023-03-26",
      designation: "Bus",
      tothrs: 6,
      remarks: "bus",
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item.id}</Text>
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.date}</Text>
      <Text style={styles.rowText}>{item.designation}</Text>
      <Text style={styles.rowText}>{item.tothrs}</Text>
      <Text style={styles.rowText}>{item.remarks}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.headerText}>ID</Text>
              <Text style={styles.headerText}>Name</Text>
              <Text style={styles.headerText}>Date</Text>
              <Text style={styles.headerText}>Designation</Text>
              <Text style={styles.headerText}>Total Hours</Text>
              <Text style={styles.headerText}>Remarks</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Table2;
