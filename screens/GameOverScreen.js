import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import { color_codes } from "../utils/color_codes";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return(
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            {/* <Image source={re} */}
            <View style={styles.gameoverContainer}>
                <Text style={styles.gameOverText}>Game Over</Text>
            </View>
            <Text>
                Your took <Text>{roundsNumber}</Text> rounds to guess the number <Text>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    gameoverContainer: {
        justifyContent: "center",
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: color_codes.golden_yellow,
        margin: 36
    },
    gameOverText: {
       fontSize: 20,
       textAlign: "center",
       color: color_codes.golden_yellow
    }
})

export default GameOverScreen;