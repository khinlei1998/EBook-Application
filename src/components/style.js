import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    screensize: {
        width,
        height: height / 2
    },
    buttonstyle: {
        backgroundColor: '#FF7F56',
        marginTop: 20
    }
})
export default styles