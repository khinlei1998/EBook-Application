import React from 'react'
import { TextInput, } from 'react-native-paper';

export default function Textinput(props) {
    const { label } = props
    return (
        <TextInput
            label={label}
            mode='outlined'
            selectionColor='black'
            activeOutlineColor='#FF7F56'
            style={{ marginBottom: 20, }}
            theme={{ roundness: 15, colors: { text: "#FF7F56", } }}

        />
    )
}