import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';

const urlPoster = 'http://image.tmdb.org/t/p/w500';
const url =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=2246337a80611cc7c7330ca5156842f5&language=en-US&page=1';

class UpComingMovie extends Component {
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
    const upComingMovie = this.state.movie;
    return (
      <>
        <Text style={styles.title}>Upcoming Movie</Text>
        <ScrollView
          style={styles.scrollMovie}
          horizontal
          showsVerticalScrollIndicator={false}>
          {upComingMovie &&
            upComingMovie.map(
              ({
                id,
                poster_path,
                backdrop_path,
                original_title,
                title,
                vote_average,
                release_date,
                overview,
                video,
              }) => {
                return (
                  <View style={styles.cardPopular} key={id}>
                    <TouchableOpacity onPress={() =>
                        this.props.navigate('DetailMovieScreen', {
                          id: id,
                          title: title,
                          poster: poster_path,
                          backdrop: backdrop_path,
                          release: release_date,
                          rating: vote_average,
                          description: overview,
                        })}>
                      <Image
                        source={{uri: `${urlPoster}${poster_path}`}}
                        style={{width: 100, height: 150}}
                      />
                    </TouchableOpacity>
                    {/* <View
                      style={{
                        flexDirection: 'column',
                        width: '68%',
                        padding: 5,
                      }}>
                      <Text style={styles.textTitle}>{original_title}</Text>
                      <Text style={styles.textRelease}>
                        Release: {release_date}
                      </Text>
                    </View> */}
                  </View>
                );
              },
            )}
        </ScrollView>
      </>
    );
  }
}

export default UpComingMovie;

const styles = StyleSheet.create({
  scrollMovie: {
    // width: '100%',
    // height: '100%',
    // flexDirection: 'row',
    backgroundColor: '#22211F',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F4F4F4',
    margin: 10,
  },
  cardPopular: {
    // width: '100%',
    margin: 10,
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
