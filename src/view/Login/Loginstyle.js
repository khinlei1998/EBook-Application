import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
console.log(height * 0.02);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#45AE9E",

    },
    imgcontainer: {
        width: '100%',
        height: height / 2.5,
        marginTop: height * 0.02
    },

    bodycontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: height * 0.01
        // marginTop: 10
    },
    signuptext: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'NotoSerifGeorgian-VariableFont_wdth,wght'
    },
    forgotpasstext: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'NotoSerifGeorgian-VariableFont_wdth,wght'
    }

})
export default styles