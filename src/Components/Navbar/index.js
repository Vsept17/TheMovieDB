import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text style={styles.text}>The Movie</Text>
        <View>
          <TouchableOpacity
            style={styles.btnSignIn}
            onPress={() => this.props.navigate('InformationA')}>
            <Text style={{color: '#F4F4F4'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Navbar

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  text:{
    color: '#F4F4F4',
    fontSize: 18,
    fontWeight: '700'
  },
  btnSignIn: {
    backgroundColor: '#FF7314',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
