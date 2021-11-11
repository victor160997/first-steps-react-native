import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Dog from './Dog';
import DogLegal from './DogLegal';
import styles, { Text20, Body, DogImage, BodyApp } from './styles/styles';
import Padrao from './styles/styles';

export default function App() {
  return (
    <BodyApp>
      <Dog />
      <DogLegal />
    </BodyApp>
  )
}

