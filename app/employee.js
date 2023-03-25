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

const Table = () => {
  const [data, setData] = useState([
    {
      id: "W00222",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 9,
      remarks: "15/04/2022",
    },
    {
      id: "S01961",
      name: "ADEBOYE IGE",
      date: "2022-04-15",
      designation: "HSE Engineer	",
      tothrs: 10,
      remarks: "15/04/2022",
    },
    {
      id: "S10385",
      name: "ANEESH KUMAR	",
      date: "2022-04-15",
      designation: "Engineer Site",
      tothrs: 6,
      remarks: "15/04/2022",
    },
    {
      id: "W10368",
      name: "INDRA KUMAR	",
      date: "2022-04-15",
      designation: "Carpenter",
      tothrs: 10,
      remarks: "15/04/2022",
    },
    {
      id: "W10345",
      name: "JAGJIT SINGH",
      date: "2022-04-15",
      designation: "Carpenter",
      tothrs: 10,
      remarks: "15/04/2022",
    },
    {
      id: "W00465",
      name: "MOHAMMAD IQBAL	",
      date: "2022-04-15",
      designation: "Working Chargehand Gr.10",
      tothrs: 6,
      remarks: "15/04/2022",
    },
    {
      id: "W01933",
      name: "SAQIB HUSSAIN",
      date: "2022-04-15",
      designation: "Scaffolder",
      tothrs: 6,
      remarks: "15/04/2022",
    },
    {
      id: "W00808",
      name: "SAH UMESH SHIVPUJAN",
      date: "2022-04-15",
      designation: "Driver",
      tothrs: 6,
      remarks: "15/04/2022",
    },
    {
      id: "W00530	",
      name: "HARINARAYANA PAPAYYA",
      date: "2022-04-15",
      designation: "Senior Technician Gr.12",
      tothrs: 6,
      remarks: "15/04/2022",
    },
    {
      id: "W00900",
      name: "LAKSHMANA SAHU GUDIYA",
      date: "2022-04-15",
      designation: "Rigger",
      tothrs: 6,
      remarks: "15/04/2022",
    },
  ]);

  const addData = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
  };

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

export default Table;
