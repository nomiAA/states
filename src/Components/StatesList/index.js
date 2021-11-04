import React, { useState } from 'react'
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
import DoubleClick from 'react-native-double-tap'
const StatesList = ({ item, index, selectHandler }) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <DoubleClick
      singleTap={() => {
        selectHandler(item)
      }}
      doubleTap={() => {
        setShowDetails(!showDetails)
        console.log('double tap')
      }}
      delay={200}
    >
      <View
        style={[
          styles.FlatListView,
          {
            backgroundColor: showDetails ? 'red' : '#FAFAFA'
          }
        ]}
      >
        <Text style={{ textAlign: 'center' }}>{item.state}</Text>
      </View>
    </DoubleClick>
  )
}

export default StatesList

const styles = StyleSheet.create({
  FlatListView: {
    marginVertical: hp(1),
    alignSelf: 'center',
    borderColor: '#FAFAFA',
    width: wp('30%'),
    marginHorizontal: wp(0.2),
    alignItems: 'center',
    paddingVertical: hp(1),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'flex-end'
  }
})
