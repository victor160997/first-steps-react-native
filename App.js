import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import styles, { Text20, Body, DogImage } from './styles/styles';
import Padrao from './styles/styles';

export default function App() {
  return (
    <Body>
      <Text20>App!</Text20>
      <DogImage source={ { uri: 'https://www.doglife.com.br/site/assets/images/cao.png' } } style={ [Padrao.shadow] }/>
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </Body>
  )
}

