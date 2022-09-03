import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import styles from './Loginstyle';
import TextInput from '../../components/Textinput';
import Button from '../../components/Button';

export default function Login() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Image source={require('../../images/4.webp')} style={styles.imgcontainer} />

            <View style={{ marginLeft: 20, marginRight: 20, }}>
                <TextInput label="Email"
                />

                <TextInput label="Password"
                />
                <View style={styles.bodycontainer}>
                    <View>
                        {/* <Text style={styles.signuptext}>Sign Up</Text> */}
                    </View>

                    {/* <View> */}
                    <Text style={styles.forgotpasstext}>Forgot Your Password?</Text>
                    {/* </View> */}
                </View>

                <Button label='Login' />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'white', }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center', color: 'white', fontFamily: 'NotoSerifGeorgian-VariableFont_wdth,wght' }}>OR</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
            </View>

            <View style={{ marginLeft: 20, marginRight: 20 }}>
                <Button label=' Sign in with google' icon='google' />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'NotoSerifGeorgian-VariableFont_wdth,wght', fontSize: 15, color: 'white' }}>
                    Already Have an account? <Text style={{ fontWeight: 'bold', fontFamily: "NotoSerifGeorgian-VariableFont_wdth,wght" }}>SignUp</Text>
                </Text>
            </View>

        </KeyboardAvoidingView>
    )
}