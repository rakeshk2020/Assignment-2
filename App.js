import React from 'react';

import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Images from './src/details/image';
import Details from './src/details/text';
import Press from './src/details/button';



export default function App() {

  return (
    <>
    <Images />
    <Details />
    <Press />
    
    </>

    

  );

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    margin: 20,
    borderWidth: 2,
    padding: 15,
  }
});



