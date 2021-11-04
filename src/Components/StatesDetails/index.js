import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
import Countries from '../Countries'
import { FetchCountryDetailsAPI } from '../../redux/Actions'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const StatesDetails = () => {
  const [showDetails, setShowDetails] = useState(false)
  const { selectedState } = useSelector(state => state.SelectStateReducer)
  const { TotalPopulation } = useSelector(state => state.GetPopulationReducer)

  useEffect(() => {
    if (selectedState?.state) setShowDetails(true)
  }, [selectedState])

  return (
    <View>
      <Modal
        onBackdropPress={() => setShowDetails(false)}
        isVisible={showDetails}
        style={styles.modal}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>States Details</Text>
            <View style={styles.basicDetails}>
              <Text style={{ fontSize: hp(3) }}> {selectedState.state}</Text>
              <Text style={{ color: 'red', marginVertical: hp(0.5) }}>
                Population:{selectedState.population}
              </Text>
              <Text style={{ marginVertical: hp(0.5) }}>
                Num of Countries:{selectedState.counties}
              </Text>
              <Text style={{ marginVertical: hp(0.5) }}>
                State Population equals to country population:
                {selectedState.population == TotalPopulation ? (
                  <Text>Yes</Text>
                ) : (
                  <Text>No</Text>
                )}
              </Text>

              <Text>Sum of Countries Population: {TotalPopulation}</Text>
            </View>

            <Countries style={styles.counties} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default StatesDetails

const styles = StyleSheet.create({
  container: {
    height: 550,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 30
  },
  modal: {
    margin: 0,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  basicDetails: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F0F0F0',
    backgroundColor: '#FAFAFA',
    padding: 20
  },
  title: {
    fontSize: hp('3%'),
    textAlign: 'center',
    marginBottom: 10
  },
  counties: {
    paddingBottom: 20
  }
})
