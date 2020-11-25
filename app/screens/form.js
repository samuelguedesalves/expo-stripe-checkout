import React from 'react';

import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

import axios from 'axios';


const Form = ({ navigation }) => {

  async function createSession () {
    // console.log('init')
    try{
      const request = await axios.get('http://192.168.2.175:3333/create_session');
      // console.log(request);
      const { sessionId } = request.data;

      navigation.navigate('Checkout', { sessionId });
    }catch (error) {
      Alert(`${error}`);
    }
  }

  return (
    <View style={styles.body} >
      <Text style={styles.title} >Pagamento de anúncio de 7 dias</Text>
      <TouchableOpacity 
        style={styles.buttonPayment} 
        onPress={ () => createSession() } 
      >
        <Text style={styles.textButtonPayment} >Realizar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
  buttonPayment: {
    height: 50,
    width: '80%',
    backgroundColor: '#8338ec',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  textButtonPayment: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eee',
  }
})

export default Form;