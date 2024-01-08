import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InputLabel from "../components/inputLabel";
import {Ionicons} from "@expo/vector-icons";
import { color_codes } from "../utils/color_codes";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
        onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber]);
  
  function generateRandomNumber(min, max, exclude) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    if (rndNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    }
    return rndNumber;
  }

  function nextGuessNumber(direction) {
    if ((direction === "lower" && currentGuess < userNumber)  || 
    (direction === "higher" && currentGuess > userNumber)){
        Alert.alert("Dont lie", "You know thats wrong", [{text: "Sorry", style: "cancel"}])
        return;
    }
    if (direction === "lower") {
        maxBoundary = currentGuess;
    } else {
        minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumber(minBoundary,maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prev) => [...prev, newRndNumber]);
  }

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InputLabel style={styles.inputLabel}>Higher or lower?</InputLabel>
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessNumber.bind(null, 'lower')}>
            <Ionicons name="md-remove" size={24} color={color_codes.white} />
            </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessNumber.bind(null,'higher')}>
          <Ionicons name="md-add" size={24} color={color_codes.white} />
          </PrimaryButton>
        </View>
        </View>
      </Card>
      <View style={styles.listView}>
       <FlatList data={guessRounds}
        renderItem={(itemData) => <Text style={styles.guessedText}>Opponent's Guess: {itemData.item}</Text>}
        keyExtractor={(item) => item}>
       </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 32,
  },
  inputLabel: {
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  },
  listView: {
    flex: 1,
    padding: 12
  },
  guessedText: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: color_codes.dark_red,
    padding: 10,
    backgroundColor: color_codes.dark_red,
    color: color_codes.white,
    marginTop: 5
  }
});

export default GameScreen;
