import { StyleSheet } from "react-native";
import styled from "styled-components/native"

export const BodyApp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const BodyDog = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export const Text20 = styled.Text`
  font-size: 70px;
  text-shadow: 0px 5px 15px black;
`;


export const DogImage = styled.Image`
  margin-top: 50px;
  width: 200px;
  height: 200px;
  border-radius: 360px;
  /* border: solid black 3px; */
  box-shadow: 5px 5px 15px white;
`;

/* export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  f20: {
    fontSize: 70,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
    fontWeight: 'bold',
    padding: 15,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  }
}); */