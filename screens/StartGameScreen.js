import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import { color_codes } from "../utils/color_codes";
import { useState } from "react";
import Title from "../components/Title";
import InputLabel from "../components/inputLabel";

function StartGameScreen({onConfirm}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberChangeHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const enteredNum = parseInt(enteredNumber);
    if (isNaN(enteredNum) || enteredNum <= 0 || enteredNum > 99) {
      Alert.alert("Invalid number!", "Input has to be a number between 1 and 99", [
        { text: "Okay", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    onConfirm(enteredNum);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
    <Title>Guess my number</Title>
    <Card>
      <InputLabel style={styles.inputLabel}>Enter a number</InputLabel>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberChangeHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center"
  },
  inputLabel: {
    marginBottom: 10
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 30,
    textAlign: "center",
    borderBottomColor: color_codes.golden_yellow,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    color: color_codes.golden_yellow,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
