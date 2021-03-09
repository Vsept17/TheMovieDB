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
import NowPlayingMovie from "../../Components/MainScreen/NowPlayingMovie";
import UpComingMovie from "../../Components/MainScreen/UpComingMovie";

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navbar}>
          <Text style={styles.text}>The MovieDB</Text>
          <View>
            <TouchableOpacity style={styles.btnSignIn} onPress={() => navigation.navigate('InformationA')}>
              <Text style={{color: '#F4F4F4'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <NowPlayingMovie />
        <PopularMovie />
        <UpComingMovie />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: '100%',
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
