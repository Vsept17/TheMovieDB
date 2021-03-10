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

class InformationAScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    jobdesk: [],
  };

  addJobdesk() {
    this.setState({
      jobdesk: [...this.state.jobdesk, ''],
    });
  }

  handleChange(e, index) {
    this.state.jobdesk[index] = e;
    this.setState({jobdesk: this.state.jobdesk});
  }

  handleRemove(index) {
    this.state.jobdesk.splice(index);
    this.setState({jobdesk: this.state.jobdesk});
  }

  onSubmit = async () => {
    try {
      await AsyncStorage.setItem('firstName', this.state.firstName);
      await AsyncStorage.setItem('lastName', this.state.lastName);
      await AsyncStorage.setItem('gender', this.state.gender);
      await AsyncStorage.setItem('email', this.state.email);
      const jsonValue = JSON.stringify(this.state.jobdesk);
      await AsyncStorage.setItem('jobdesk', jsonValue);
    } catch (err) {
      console.log('this error', err);
    }
  };

  // getData = async () => {
  //   try {
  //     const firstName = await AsyncStorage.getItem('firstName');
  //     const lastName = await AsyncStorage.getItem('lastName');
  //     const jobdesk = await AsyncStorage.getItem('jobdesk');
  //     const gender = await AsyncStorage.getItem('gender');
  //     const email = await AsyncStorage.getItem('email');

  //     this.setState({
  //       firstName: firstName,
  //       lastName: lastName,
  //       gender: gender,
  //       email: email,
  //       jobdesk: jobdesk,
  //     });
  //   } catch (e) {
  //     console.log('this error', e);
  //   }
  // };

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    const radio_props = [
      {label: 'Male    ', value: 'Male'},
      {label: 'Female', value: 'Female'},
    ];

    const {firstName, lastName, jobdesk, gender, email} = this.state;
    console.log('ini ', this.state.jobdesk);
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.titleHeader}>Information A</Text>
          <Text style={styles.titleHeader}>01</Text>
        </View>
        <View
          style={{
            // height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'white',
          }}>
          <View style={styles.containerName}>
            <View style={{width: '50%', paddingHorizontal: 10}}>
              <Text style={styles.textTitle}>First Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="first name"
                onChangeText={(text) =>
                  this.setState({
                    firstName: text,
                  })
                }
              />
            </View>
            <View style={{width: '50%', paddingHorizontal: 10}}>
              <Text style={styles.textTitle}>Last Name</Text>
              <TextInput
                style={styles.textInput}
                placeholder="last name"
                onChangeText={(text) =>
                  this.setState({
                    lastName: text,
                  })
                }
              />
            </View>
          </View>
          <View style={styles.containerGender}>
            <Text style={styles.textTitle}>Jobdesk</Text>
            <View>
              {this.state.jobdesk.map((jobdesk, index) => {
                return (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    key={index}>
                    <View style={{width: '70%'}}>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={(e) => this.handleChange(e, index)}
                        value={jobdesk}
                      />
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => this.handleRemove(index)}
                        style={styles.btnNext}>
                        <Text>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
            <View style={{width: '100%'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF7314',
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // width: '50%',
                }}
                onPress={(e) => this.addJobdesk(e)}>
                <Text>Add Jobdesk</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerEmail}>
            <Text style={styles.textTitle}>Gender</Text>
            <View style={{paddingVertical: 10}}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {
                  this.setState({gender: value});
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
            <TextInput
              style={styles.textInput}
              placeholder="email"
              onChangeText={(text) =>
                this.setState({
                  email: text,
                })
              }
            />
          </View>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingVertical: 15,
            }}>
            <TouchableOpacity
              style={styles.btnNext}
              onPress={() => {
                this.onSubmit();
                this.props.navigation.navigate('InformationB');
              }}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default InformationAScreen;

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
  containerGender: {
    width: '100%',
    backgroundColor: '#393534',
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleHeader: {
    color: '#F4F4F4',
    fontSize: 20,
    marginBottom: 20,
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
