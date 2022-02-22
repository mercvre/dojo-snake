import React from 'react';
import { StyleSheet, SafeAreaView, Text, Alert, Button } from 'react-native';
import { NOKIA_COLOR } from '../theme';
import { Board } from '../Board/Board';
import { getScreenDimension } from '../utils/getScreenDimension';
import { useGameLoop } from './useGameLoop';
import { Controls } from '../Controls/Controls';
import { GameOverMessage } from './GameOverMessage';
import { ScoreBand } from '../Score/ScoreBand';


export const Home = () => {
  const {head, tail, apple, relaunch, goDown, goLeft, goUp, goRight, running, score} = useGameLoop();
  return (
    <SafeAreaView style={styles.container}>
    <ScoreBand score={score}/>
      <Board size={screenWidth-30} head={head} tail={tail} apple={apple} />
      {!running && <GameOverMessage />}
      <Controls goDown={goDown} goUp={goUp} goLeft={goLeft} goRight={goRight}/>
      <Button title="Relancer une partie" disabled={running} onPress={relaunch} />
    </SafeAreaView>
  );
};


const {screenWidth} = getScreenDimension();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NOKIA_COLOR,
    padding: 10,
  },
});
