import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { FormLabel, FormInput, Button } from 'react-native-elements'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SingupScreenStyle'
import images from '../Themes/Images'

class SingupScreen extends Component {
  render () {
    return (
      <ScrollView style={[styles.container, styles.greenBg]}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.section}>

            <Image source={images.appLogo} style={{alignSelf: 'center', width: 50, height: 50}} resizeMode='stretch' />

            <FormLabel labelStyle={styles.labelForm}>Username</FormLabel>
            <FormInput containerStyle={styles.inputFormContainer} onChangeText={() => { console.log('clicked') }} />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}

            <FormLabel labelStyle={styles.labelForm}>Password</FormLabel>
            <FormInput containerStyle={styles.inputFormContainer} onChangeText={() => { console.log('clicked') }} />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}

            <FormLabel labelStyle={styles.labelForm}>Repeat password</FormLabel>
            <FormInput containerStyle={styles.inputFormContainer} onChangeText={() => { console.log('clicked') }} />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}

            <FormLabel labelStyle={styles.labelForm}>Recovery Phrase</FormLabel>
            <FormInput containerStyle={styles.inputFormContainer} onChangeText={() => { console.log('clicked') }} />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}

            <Button title='Sing up' buttonStyle={{backgroundColor: '#00796B', marginVertical: 20}} onPress={() => this.props.navigation.navigate('HomeScreen')} />

            <Text style={{textAlign: 'center'}} onPress={() => this.props.navigation.navigate('LoginScreen')}>
              Cancel
            </Text>

          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingupScreen)
