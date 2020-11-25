import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const Checkout = ({ navigation, route  }) => {
  const sessionId = route.params.sessionId;

  console.log(sessionId);

  function handleNavigationChange (event) {
    if(event.url == 'http://192.168.2.175:3333/success_payment'){
      navigation.navigate('Home');
    } else if( event.url == 'http://192.168.2.175:3333/cancel_payment') {
      navigation.navigate('Home');
    }
  }
  // http://192.168.2.175:3333/checkout/?sessionId=
  return (
    <WebView 
      source={{ uri: `http://192.168.2.175:3333/checkout/?sessionId=${sessionId}` }} 
      onNavigationStateChange={handleNavigationChange}
    />
  );
}

export default Checkout;


