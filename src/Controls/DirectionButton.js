import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const DirectionButton = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={{...styles.container, ...style}} />
);

const styles = {
  container: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow',
    borderColor: 'brown',
    borderWidth: 2,
    borderRadius: 30,
  },
};
