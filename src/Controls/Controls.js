import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DirectionButton } from './DirectionButton';

export const Controls = ({ goRight, goLeft, goUp, goDown }) => (
  
  <View style={styles.container}>
    <View style={styles.top}>
      <DirectionButton onPress={goUp} />
    </View>
    <View style={styles.center}>
      <DirectionButton onPress={goLeft} style={{backgroundColor:'blue'}}/>
      <DirectionButton onPress={goRight} style={{backgroundColor:'blue'}}/>
    </View>
    <View style={styles.bottom}>
      <DirectionButton onPress={goDown} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bottom: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
