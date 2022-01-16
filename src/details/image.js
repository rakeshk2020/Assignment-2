import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function Images()
{
    return (
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.design} />
    );
}
const styles = StyleSheet.create({
    design: {
      height: 200,
      width: 100,
    }
  });