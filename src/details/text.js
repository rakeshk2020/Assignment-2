import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Details() 
{
return ( 
  <View>
        <Text style={styles.headerText}>
        Login Page
        </Text>
    <TextInput
        style={styles.login}
        placeholder="Username"
      />
    <TextInput
        style={styles.login}
        placeholder="Password"
        secureTextEntry={true}
      />
  </View>
);     
}
const styles = StyleSheet.create({
  login: {
    color: 'black',
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
  }
});
