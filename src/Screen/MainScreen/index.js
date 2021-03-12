import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import PopularMovie from '../../Components/MainScreen/PopularMovie';
import NowPlayingMovie from '../../Components/MainScreen/NowPlayingMovie';
import UpComingMovie from '../../Components/MainScreen/UpComingMovie';
import Navbar from '../../Components/Navbar';

const MainScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Navbar navigate={props.navigation.navigate} />
      <View style={styles.containerMovie}>
        <NowPlayingMovie navigate={props.navigation.navigate} />
        <PopularMovie navigate={props.navigation.navigate} />
        <UpComingMovie navigate={props.navigation.navigate} />
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: '100%',
    backgroundColor: '#22211F',
  },
  containerMovie: {
    paddingVertical: 20,
  }
});
