
import * as React from 'react'
import { View } from 'react-native'
import Home from '../screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Empty = () => <View />
const Bottom = createMaterialBottomTabNavigator()
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      headerMode='none'
      activeColor='#6550c6'
      inactiveColor='grey'
      barStyle={{ backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10 }}
      style={{ backgroundColor: 'transparent' }}
    >
      <Bottom.Screen name='Home' component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => <Icon name='home' color={color} size={20} />
        }}
      />
      <Bottom.Screen name='Feed' component={Empty}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, focused }) => <Icon name='file-document-box-outline' color={color} size={20} />
        }}
      />
      <Bottom.Screen name='OrderStatus' component={Empty}
        options={{
          tabBarLabel: 'Transaksi',
          tabBarIcon: ({ color, size }) => <Icon name='format-list-bulleted' color={color} size={20} />
        }}
      />
      <Bottom.Screen name='Wishlist' component={Empty}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => <Icon name='heart-outline' color={color} size={20} />
        }}
      />
      <Bottom.Screen name='Profile' component={Empty}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, size }) => <Icon name='account' color={color} size={20} />
        }}
      />
    </Bottom.Navigator>
  )
}
const Stack = createStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' },
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
    >
      <Stack.Screen name='Home' component={BottomNavigator} />
      <Stack.Screen name='ProductCatalogue' component={Empty} />
      <Stack.Screen name='ProductDetail' component={Empty} />
    </Stack.Navigator>
  )
}
function App () {
  return (
    <NavigationContainer>
      {StackNavigator()}
    </NavigationContainer>
  )
}

export default App
