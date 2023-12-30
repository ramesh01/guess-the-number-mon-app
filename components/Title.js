import { Text, StyleSheet } from "react-native";
import { color_codes } from "../utils/color_codes";

function Title({children}) {
    return(
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: color_codes.white,
        textAlign: "center",
        borderWidth: 2,
        borderColor: color_codes.white,
        padding: 12
    }
});

export default Title;