import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
const Countries = () => {
  const { CountryList } = useSelector(state => state.CountryDetailsReducer)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>List of Countries in the State</Text>
      <View style={styles.table}>
        <Text style={styles.col1}>No </Text>
        <Text style={styles.col2}>Name </Text>
        <Text style={styles.col3}>Population</Text>
      </View>

      {CountryList ? (
        CountryList?.map((item, index) => (
          <View style={styles.table}>
            <Text style={styles.col1}>{index + 1} </Text>
            <Text style={styles.col2}>{item.county} </Text>
            <Text style={styles.col3}>{item.population}</Text>
          </View>
        ))
      ) : (
        <ActivityIndicator size='large' color='red' />
      )}
    </ScrollView>
  )
}

export default Countries

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginBottom: 20,
    flexGrow: 1
  },
  title: {
    textAlign: 'right',
    color: 'red',
    fontSize: hp('2.2%'),
    marginBottom: 15
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: hp(0.1)
  },
  col1: {
    flex: 1
  },
  col2: {
    flex: 2
  },
  col3: {
    textAlign: 'right',
    flex: 1,
    marginRight: 10
  }
})
