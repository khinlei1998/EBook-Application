import React from 'react'
import { Button, } from 'react-native-paper';
import styles from './style';
export default function ButtonContainer(props) {
    const { label, icon } = props
    return (
        <Button
            mode="contained" icon={icon} onPress={() => console.log('Pressed')} style={styles.buttonstyle}>
            {label}
        </Button>
    )
}