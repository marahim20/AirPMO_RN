import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default class addemp 
extends Component {
  render (){
    return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="ios-arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Job Card Details</Text>
        <View style={{width: 24}}></View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Removal of Gravel</Text>
      </View>
      <View style={styles.employeeContainer}>
        <Text style={styles.containerHeading}>Employee</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.equipmentsContainer}>
        <Text style={styles.containerHeading}>Equipments</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.containerHeading}>Quantity achieved</Text>
      </View>
    </View>
  );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
  detailsContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 24,
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  employeeContainer: {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  equipmentsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  addButton: {
    backgroundColor: 'green',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flex : 0.5,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent : 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
});