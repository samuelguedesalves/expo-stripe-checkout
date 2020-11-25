import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import Form from './screens/form';
import Checkout from './screens/checkout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Inicial" >
          <Stack.Screen 
            name="Home" 
            component={Form} 
            options={{ 
              title: 'Tela Inícial',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#8338ec',
              },
              headerTintColor: '#eee',
            }} 
          />
          <Stack.Screen 
            name="Checkout" 
            component={Checkout} 
            options={{
              title: 'Confirmar pagamento',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#8338ec',
              },
              headerTintColor: '#eee',
              headerLeft: null,
            }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;