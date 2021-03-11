import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { WebView } from 'react-native-webview';


export class VideoPlayer extends Component {
  render() {
    return (
      <View style={{width: '100%', height: 500}}>
        <WebView
          source={{uri: 'https://www.youtube.com/embed/qXymaHXEDa4'}}
        />
        <Text style={{fontSize: 25. }}>NGERRIII</Text>
      </View>
    );
  }
}

export default VideoPlayer;
