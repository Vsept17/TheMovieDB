import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [getMovie, setGetMovie] = useState([]);
  const urlPoster = 'http://image.tmdb.org/t/p/w500';
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=2246337a80611cc7c7330ca5156842f5&language=en-US&page=1';

  const getMoviePopular = () => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data.results;
        const poster = res.data.results.poster_path;

        console.log('ini', data);
        setGetMovie(data);
      })
      .catch((err) => {
        console.log('this error', err);
      });
  };

  useEffect(() => {
    getMoviePopular();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navbar}>
          <Text>The MovieDB</Text>
          <View>
            <TouchableOpacity style={styles.btnSignIn}>
              <Text style={{color: '#F4F4F4'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.scrollMovie} showsVerticalScrollIndicator={false}>
          {getMovie &&
            getMovie.map(
              ({
                id,
                poster_path,
                original_title,
                vote_average,
                release_date,
              }) => {
                return (
                  <View style={styles.cardPopular} key={id}>
                    <View>
                      <Image
                        source={{uri: `${urlPoster}${poster_path}`}}
                        style={{width: 100, height: 150}}
                      />
                    </View>
                    <View style={{flexDirection: 'column', width: '68%', padding: 5}}>
                      <Text style={styles.textTitle}>{original_title}</Text>
                      <Text style={styles.textRelease}>Release: {release_date}</Text>
                    </View>
                  </View>
                );
              },
            )}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#22211F'
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  btnSignIn: {
    backgroundColor: '#FF7314',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  scrollMovie: {
      width: '100%',
    backgroundColor: '#22211F',
    // margin: 5,
  },
  cardPopular: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#393534',
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    // flexWrap: 'wrap'
  },
  textTitle: {
      fontSize: 20,
      color: '#F4F4F4',
      flexWrap: 'wrap'
  },
  textRelease: {
    fontSize: 15,
    color: '#F4F4F4'
}
});
