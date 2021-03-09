import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import PopularMovie from "../../Components/MainScreen/PopularMovie";

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navbar}>
          <Text style={styles.text}>The MovieDB</Text>
          <View>
            <TouchableOpacity style={styles.btnSignIn} onPress={() => navigation.navigate('Register')}>
              <Text style={{color: '#F4F4F4'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <PopularMovie />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#22211F'
  },
  text:{
    color: '#F4F4F4',
    fontSize: 18,
    fontWeight: '700'
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  btnSignIn: {
    backgroundColor: '#FF7314',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  
});
