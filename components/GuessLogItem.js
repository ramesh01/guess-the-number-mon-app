import { StyleSheet, Text, View } from "react-native";
import { color_codes } from "../utils/color_codes";

function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text># {roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    );
}
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: color_codes.black,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: color_codes.dark_red,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4,
        shadowColor: color_codes.black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    }
});