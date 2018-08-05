import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StorybookUI from './storybook'

export class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const index = process.env.REACT_NATIVE_APP_EXPO ? StorybookUI : App

export default index
