import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { color_codes } from './utils/color_codes';
import {LinearGradient} from "expo-linear-gradient";
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [userInput, setUserInput] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // useFonts({})

  const startNewGameHandler = () => {
    setUserInput(null);
    setGameOver(true);
  }

  const userInputConfirmHandler = (input) => {
    setUserInput(input);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onConfirm={userInputConfirmHandler} />;
  if (userInput) {
    screen = <GameScreen userNumber={userInput} onGameOver={gameOverHandler} />;
  }

  if (gameOver && userInput) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userInput} 
    onStartNewGame={startNewGameHandler} />
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  return (
    <LinearGradient colors={[color_codes.deep_red, color_codes.golden_yellow]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/background.jpg')} 
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.20
  }
});
