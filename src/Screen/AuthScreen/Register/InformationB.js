import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import AsyncStorage from '@react-native-async-storage/async-storage';

class InformationBScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    jobdesk: '',
    gender: '',
    email: '',
  };

  onSubmit = async () => {
    try {
      await AsyncStorage.setItem('firstData', {
        firstName,
        lastName,
        jobdesk,
        gender,
        email,
      });
    } catch (err) {
      console.log('this error', err);
    }
  };
  render() {
    const radio_props = [
      {label: 'Male    ', value: 0},
      {label: 'Female', value: 1},
    ];
    console.log("ini ", this.state.firstName); 
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerName}>
          <View style={{width: '50%', paddingHorizontal: 10}}>
            <Text style={styles.textTitle}>First Name</Text>
            <TextInput style={styles.textInput} placeholder="first name" onChangeText={(text) => this.setState({
              firstName: text
            })} />
          </View>
          <View style={{width: '50%', paddingHorizontal: 10}}>
            <Text style={styles.textTitle}>Last Name</Text>
            <TextInput style={styles.textInput} placeholder="last name" onChangeText={(text) => this.setState({
              lastName: text
            })}/>
          </View>
        </View>
        <View  style={styles.containerEmail}>
          <TextInput placeholder="jobdesk" />
        </View>
        <View style={styles.containerEmail}>
          <Text style={styles.textTitle}>Gender</Text>
          <View style={{paddingVertical: 10}}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {
                this.setState({value: value});
              }}
              labelHorizontal={true}
              label
              formHorizontal={true}
              buttonWrapStyle={{marginLeft: 10}}
            />
          </View>
        </View>
        <View style={styles.containerEmail}>
          <Text style={styles.textTitle}>Email</Text>
          <TextInput style={styles.textInput} placeholder="email" onChangeText={(text) => this.setState({
              email: text
            })}/>
        </View>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            paddingVertical: 15,
          }}>
          <TouchableOpacity style={styles.btnNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default InformationBScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 10,
    backgroundColor: '#22211F',
  },
  containerName: {
    width: '100%',
    backgroundColor: '#393534',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerEmail: {
    width: '100%',
    backgroundColor: '#393534',
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textTitle: {
    fontSize: 18,
    color: '#F4F4F4',
  },
  textInput: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F4F4F4',
    // color: '#F4F4F4',
  },
  btnNext: {
    backgroundColor: '#FF7314',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
