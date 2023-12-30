import { StyleSheet, Text } from "react-native";
import { color_codes } from "../utils/color_codes";

function InputLabel({children, style}) {
    return (
        <Text style={[styles.inputLabel, style]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    inputLabel: {
        color: color_codes.golden_yellow,
        fontSize: 20
      },
})
export default InputLabel;