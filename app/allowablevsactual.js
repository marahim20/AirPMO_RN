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

const Table3 = () => {
  const [data, setData] = useState([
    {
      slno: 1,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 2,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 3,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 4,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 5,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 6,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 7,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 8,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
    {
      slno: 9,
      p_resources: 0,
      p_total_hours: 0,
      designation: "Operator",
      allowable_resources: 0,
      allowable_total_hours: 0,
      actual_total_hours: 0,
      actual_total_cost: 0,
      spi: 0,
      cpi: 0,
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.rowText}>{item.slno}</Text>
      <Text style={styles.rowText}>{item.p_resources}</Text>
      <Text style={styles.rowText}>{item.p_total_hours}</Text>
      <Text style={styles.rowText}>{item.designation}</Text>
      <Text style={styles.rowText}>{item.allowable_resources}</Text>
      <Text style={styles.rowText}>{item.allowable_total_hours}</Text>
      <Text style={styles.rowText}>{item.actual_total_hours}</Text>
      <Text style={styles.rowText}>{item.actual_total_cost}</Text>
      <Text style={styles.rowText}>{item.spi}</Text>
      <Text style={styles.rowText}>{item.cpi}</Text>
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
              <Text style={styles.headerText}>Sl No</Text>
              <Text style={styles.headerText}>P Resources</Text>
              <Text style={styles.headerText}>P Total Hours</Text>
              <Text style={styles.headerText}>Designation</Text>
              <Text style={styles.headerText}>Allowable Resources</Text>
              <Text style={styles.headerText}>Allowable Total Hours</Text>
              <Text style={styles.headerText}>Actual Total Hours</Text>
              <Text style={styles.headerText}>Actual Total Cost</Text>
              <Text style={styles.headerText}>Spi</Text>
              <Text style={styles.headerText}>Cpi</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Table3;
