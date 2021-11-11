import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import styles, { Text20, Body, DogImage, BodyDog } from './styles/styles';
import Padrao from './styles/styles';

export default function DogLegal() {
  return (
    <BodyDog>
      <Text20>App!</Text20>
      <DogImage source={ { uri: 'https://www.doglife.com.br/site/assets/images/cao.png' } } />
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </BodyDog>
  )
}
