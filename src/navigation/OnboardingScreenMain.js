import React from 'react';
const COLORS = { primary: '#282534', white: '#fff' };
import OnboardingScreen from '../components/onboarding';

const OnboardingScreenMain = (props) => {

    const Donebtn = () => {
        props.navigation.navigate('Login')
    }

    return (
        <OnboardingScreen navigationprop={Donebtn} />
    );
};

export default OnboardingScreenMain;