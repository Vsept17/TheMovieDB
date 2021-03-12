import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LogoSplash from '../../Assets/images/movie.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.background}>
      <Text style={styles.title}>The Movie</Text>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={LogoSplash} />
      </View>
      <Text style={{color: '#F4F4F4', fontSize: 15, paddingVertical: 10}}>Explore, your favorite movie!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22211F',
  },
  title: {
    fontSize: 50,
    color: '#F4F4F4',
    //   marginBottom: 60
  },
  containerImg: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  img: {
    width: 100,
    height: 100,
  },
});
