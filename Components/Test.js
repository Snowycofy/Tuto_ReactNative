import React from 'react'
import { StyleSheet, View, Platform, Text } from 'react-native'
import HelloWorld from './HelloWorld.android';

class Test extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.subview_container}>
            {/*
                Platform.OS === 'ios' ? <Text>iOS</Text> : <Text>Android</Text>
            */}
            <HelloWorld/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    ...Platform.select({
        ios: {
            backgroundColor: 'red',
            height: 100,
            width: 50
        },
        android: {
            backgroundColor: 'red',
            height: 50,
            width: 100
        }
    })
    }})

{/* 
        ou 
        subview_container: {
            backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue,
            height: Platform.OS === 'ios' ?  100 : 50,
            width: Platform.OS === 'ios' ?  50 : 100
        }

*/}


export default Test