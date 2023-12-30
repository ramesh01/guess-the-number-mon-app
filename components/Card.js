import { StyleSheet, View } from "react-native";
import { color_codes } from "../utils/color_codes";

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    )
}
const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 30,
        marginHorizontal: 24,
        backgroundColor: color_codes.dark_red,
        borderRadius: 8,
        elevation: 4,
        shadowColor: color_codes.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
});

export default Card;