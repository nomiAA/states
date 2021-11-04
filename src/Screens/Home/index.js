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
  ScrollView
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import StatesList from '../../Components/StatesList'
import StatesDetails from '../../Components/StatesDetails'
import { useDispatch, useSelector } from 'react-redux'
import {
  FetchCountryDetailsAPI,
  FetchStates,
  SelectState
} from '../../redux/Actions'
const { width, height } = Dimensions.get('screen')
const Home = ({ navigation }) => {
  const [searchState, setSearchState] = useState('')

  const dispatch = useDispatch()
  const { loading, states, error } = useSelector(state => state.StateReducer)
  const { selectedState } = useSelector(state => state.SelectStateReducer)
  console.log('states : ', states, 'loading : ', loading, 'error: ', error)
  const { detail } = selectedState
  console.log('Selected Data Details ', selectedState)
  useEffect(() => {
    dispatch(FetchStates)
  }, [])

  useEffect(() => {
    detail ? dispatch(FetchCountryDetailsAPI(detail)) : null
  }, [detail])

  const selectHandler = item => {
    dispatch(SelectState(item))
  }

  const filteredData = states.filter(data =>
    data.state.toLowerCase().includes(searchState.toLowerCase())
  )
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          placeholder='Search State'
          onChangeText={val => setSearchState(val)}
          style={styles.textInput}
        />
        <StatesDetails />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            marginTop: 30
          }}
        >
          <View style={styles.list}>
            {states ? (
              <FlatList
                data={states}
                renderItem={({ item, index }) => (
                  <StatesList
                    item={item}
                    index={index}
                    selectHandler={selectHandler}
                  />
                )}
              />
            ) : (
              <Text>No data</Text>
            )}
          </View>

          <View style={styles.list}>
            {filteredData ? (
              <FlatList
                data={filteredData}
                renderItem={({ item, index }) => (
                  <StatesList
                    item={item}
                    index={index}
                    selectHandler={selectHandler}
                  />
                )}
              />
            ) : (
              <Text>No Data </Text>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = {
  container: {
    paddingTop: 100,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  title: {
    fontSize: 12,
    color: '#000'
  },
  list: {
    width: '50%',
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: hp('1%'),
    backgroundColor: '#FAFAFA',
    borderColor: '#FAFAFA',
    marginHorizontal: wp('1%'),
    width: 200,
    height: 40
  }
}
