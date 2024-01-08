import { View, Text, StyleSheet, Dimensions } from "react-native"
import { color_codes } from "../utils/color_codes";

function NumberContainer({children}) {
    const deviceWidth = Dimensions.get('window').width;
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: color_codes.golden_yellow,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: color_codes.golden_yellow,
        fontSize: 36,
        fontWeight: "bold"
    }
});

export default NumberContainer;