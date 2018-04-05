import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Styles
import styles from './Styles/HomeScreenStyle'
import images from '../Themes/Images'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>HomeScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
