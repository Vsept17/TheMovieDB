import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import axios from 'axios';

const urlPoster = 'http://image.tmdb.org/t/p/w500';
const url =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=2246337a80611cc7c7330ca5156842f5&language=en-US&page=1';

class PopularMovie extends Component {
  state = {
    movie: [],
  };

  componentDidMount() {
    axios
      .get(url)
      .then((res) => {
        this.setState({
          movie: res.data.results,
        });
      })
      .catch((err) => {
        console.log('this error', err);
      });
  }
  render() {
    const popularMovie = this.state.movie;
    return (
      <>
        <Text style={styles.title}>Popular Movie</Text>
        <ScrollView
          style={styles.scrollMovie}
          showsVerticalScrollIndicator={false}>
          {popularMovie &&
            popularMovie.map(
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
                    <View
                      style={{
                        flexDirection: 'column',
                        width: '68%',
                        padding: 5,
                      }}>
                      <Text style={styles.textTitle}>{original_title}</Text>
                      <Text style={styles.textRelease}>
                        Release: {release_date}
                      </Text>
                    </View>
                  </View>
                );
              },
            )}
        </ScrollView>
      </>
    );
  }
}

export default PopularMovie;

const styles = StyleSheet.create({
  scrollMovie: {
    width: '100%',
    height: '100%',
    backgroundColor: '#22211F',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F4F4F4',
    marginVertical: 10,
  },
  cardPopular: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#393534',
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    color: '#F4F4F4',
    flexWrap: 'wrap',
  },
  textRelease: {
    fontSize: 15,
    color: '#F4F4F4',
  },
});