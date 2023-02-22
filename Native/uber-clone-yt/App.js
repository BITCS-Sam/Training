import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler"
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';


// 1. set up redux 

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>I Love You Radha</Text>
      </View> */}

      <NavigationContainer>
        <SafeAreaProvider style={styles.container}>
          <Stack.Navigator>
            {/* <HomeScreen /> */}
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false, }} />
            <Stack.Screen name='MapScreen' component={MapScreen} options={{ headerShown: false, }} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>


    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

})