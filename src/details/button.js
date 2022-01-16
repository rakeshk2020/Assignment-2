import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function Press() 
{
    return (
        <Button title="Login" style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </Button>
    );
}
const styles = StyleSheet.create({
loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"black",
  }
});