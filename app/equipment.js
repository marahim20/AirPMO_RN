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
      id: "W00222",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00223",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00224",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00225",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00226",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00227",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00228",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00229",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00230",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
    },
    {
      id: "W00231",
      name: "NOOR RAHMAN MOHAMMAD MASOOD",
      date: "2022-04-15",
      designation: "Operator",
      tothrs: 8,
      remarks: "Approved",
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
