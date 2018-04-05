import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Button, FormInput, FormLabel, Text } from 'react-native-elements'
// Styles
import styles from './Styles/LoginScreenStyle'
// Images
import images from '../Themes/Images'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

class LoginScreen extends Component {
  render () {
    return (
      <ScrollView style={[styles.container, styles.greenBg]}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.section}>

            <Image source={images.appLogo} style={{alignSelf: 'center'}} resizeMode='stretch' />

            <FormLabel labelStyle={styles.labelForm}>Username/ Email</FormLabel>
            <FormInput containerStyle={styles.inputFormContainer} onChangeText={() => { console.log('clicked') }} />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}

            <FormLabel labelStyle={styles.labelForm}>Password</FormLabel>
            <FormInput containerStyle={styles.inputFormContainer} onChangeText={() => { console.log('clicked') }} />
            {/* <FormValidationMessage>Error message</FormValidationMessage> */}

            <Button title='Login' buttonStyle={{backgroundColor: '#00796B', marginVertical: 20}} onPress={() => this.props.navigation.navigate('HomeScreen')} />

            <View style={styles.center} >
              <Text style={{textAlign: 'center'}} onPress={() => this.props.navigation.navigate('SingupScreen')}>Don't have an account? <Text style={{fontWeight: 'bold'}}>Sing up!</Text></Text>
              <Text style={{textAlign: 'center'}}>Forgot yout password?</Text>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
