import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
import {API_YOUTUBE} from '@env';

const DetailMovieScreen = ({route, navigation}) => {
  const {
    id,
    poster,
    backdrop,
    title,
    release,
    rating,
    description,
  } = route.params;
  const [items, setItems] = useState([]);
  const urlPoster = 'http://image.tmdb.org/t/p/w500';
  const url = `http://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title} Official Trailer&type=video&key=${API_YOUTUBE}`;

  const getVideo = () => {
    axios
      .get(url)
      .then((res) => {
        const video = res.data.items;
        // const video2 = video.snippet
        setItems(video);
        console.log('test youtube', video);
      })
      .catch((err) => {
        console.log('ini error', err);
      });
  };

  useEffect(() => {
    getVideo();
  });

  return (
    <ScrollView style={{backgroundColor: '#22211F'}}>
      <View style={{width: '100%', backgroundColor: '#22211F', padding: 10}}>
        {items &&
          items.map(({snippet}) => {
            return (
              <View
                style={{width: '100%', height: 300}}
                key={snippet.channelId}>
                <Text>{snippet.title}</Text>
                <WebView
                  source={{uri: 'https://www.youtube.com/embed/SEUXfv87Wpk'}}
                />
              </View>
            );
          })}
        <View style={{width: '100%', height: 300}}>
          <WebView
            source={{uri: 'https://www.youtube.com/embed/SEUXfv87Wpk'}}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <View style={{width: '30%'}}>
            <Image
              source={{uri: `${urlPoster}${poster}`}}
              style={{width: '100%', height: 150}}
            />
          </View>
          <View style={{width: '70%', marginHorizontal: 10}}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.detail}>Release {release}</Text>
              <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <Icon name="star" color="#ffd700" size={20} />
                <Text style={styles.detail}>{rating}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.desc}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailMovieScreen;

const styles = StyleSheet.create({
  title: {
    color: '#F4F4F4',
    fontSize: 25,
    fontWeight: '800',
  },
  detail: {
    color: '#F4F4F4',
    fontSize: 16,
    fontWeight: '800',
  },
  desc: {
    color: '#F4F4F4',
  },
});

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "Tvr36VUwc6B2ZxP8EC7oNygjdz4",
//   "nextPageToken": "CAEQAA",
//   "regionCode": "ID",
//   "pageInfo": {
//     "totalResults": 1000000,
//     "resultsPerPage": 1
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "L1fIxpcLkyl6ITWwwArPWysXbVw",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "SEUXfv87Wpk"
//       },
//       "snippet": {
//         "publishedAt": "2019-06-08T02:43:19Z",
//         "channelId": "UCuF-f_kairxTjOyHSItrmtg",
//         "title": "Parasite 기생충 - Official Trailer",
//         "description": "Ki-taek's family of four is close, but fully unemployed, with a bleak future ahead of them. The son Ki-woo is recommended by his friend, a student at a prestigious ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/SEUXfv87Wpk/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/SEUXfv87Wpk/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/SEUXfv87Wpk/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Madman Films",
//         "liveBroadcastContent": "none",
//         "publishTime": "2019-06-08T02:43:19Z"
//       }
//     }
//   ]
// }
