import { StackNavigator, DrawerNavigator } from 'react-navigation'
import TransactionDetailScreen from '../Containers/TransactionDetailScreen'
import HomeScreen from '../Containers/HomeScreen'
import SingupScreen from '../Containers/SingupScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const MainNav = DrawerNavigator({
  HomeScreen: {screen: HomeScreen},
  TransactionDetailScreen: { screen: TransactionDetailScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: MainNav },
  SingupScreen: { screen: SingupScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
