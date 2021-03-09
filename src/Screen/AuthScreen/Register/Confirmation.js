import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmationScreen = () => {
  const [getFirstName, setGetFirstName] = useState('');
  const [getLastName, setGetLastName] = useState('');
  const [getJobdesk, setGetJobdesk] = useState('');
  const [getGender, setGetGender] = useState('');
  const [getEmail, setGetEmail] = useState('');

  const getData = async () => {
    try {
      const firstName = await AsyncStorage.getItem('firstName');
      const lastName = await AsyncStorage.getItem('lastName');
      const jobdesk = await AsyncStorage.getItem('jobdesk');
      const gender = await AsyncStorage.getItem('gender');
      const email = await AsyncStorage.getItem('email');
      if (value !== null) {
          setGetFirstName(firstName);
          setGetLastName(lastName);
          setGetJobdesk(jobdesk);
          setGetGender(gender);
          setGetEmail(email);
      }
    } catch (e) {
      console.log('this error', e);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <View>
      <Text>{getFirstName}</Text>
      <Text>{getLastName}</Text>
      <Text>{getJobdesk}</Text>
      <Text>{getGender}</Text>
      <Text>{getEmail}</Text>
    </View>
  );
};

export default ConfirmationScreen;
