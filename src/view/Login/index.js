import { View, Text, SafeAreaView, Dimensions, TextInput, Button, Image } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window')

export default function Login() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fac020", justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../images/2.png')} style={{ width: 110, height: 100 }} />

            <View style={{ backgroundColor: 'white', width: width - 40, height: height / 2, justifyContent: 'center' }}>

                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        // borderWidth: 1,
                        padding: 10,
                        borderRadius: 10,
                        borderColor: "gray",
                        backgroundColor: "#fac020"

                    }}
                    label="Username"
                    mode="flat"
                    keyboardType="phone-pad"
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="useless placeholder"
                // keyboardType="numeric"
                />

                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <Button
                    //   onPress={onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

        </SafeAreaView>
    )
}