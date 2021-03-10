import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const RegisterDoneScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={styles.titleHeader}>04</Text>
      </View>
      <View
        style={{
          height: '70%',
          justifyContent: 'center',
          alignItems: 'center',
        //   backgroundColor: 'green',
        }}>
        <View
          style={{
            backgroundColor: '#393534',
            paddingHorizontal: 40,
            paddingVertical: 60,
            borderRadius: 15,
            justifyContent: 'center',
          }}>
          <Text style={styles.titleSuccess}>"Thank you for submit form"</Text>
        </View>
      </View>

      <View style={{height: '10%', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate('Main')}>
          <Text>Go to Main</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterDoneScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 10,
    backgroundColor: '#22211F',
  },
  titleHeader: {
    color: '#F4F4F4',
    fontSize: 20,
    marginBottom: 20,
  },
  titleSuccess: {
    color: '#F4F4F4',
    fontSize: 20,
    marginBottom: 20,
  },
  btnNext: {
    width: '50%',
    backgroundColor: '#FF7314',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
});
