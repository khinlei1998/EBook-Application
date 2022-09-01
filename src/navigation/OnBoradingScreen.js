import React from 'react';
import {
    Image,
    Dimensions,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const { width, height } = Dimensions.get('window');
const COLORS = { primary: '#282534', white: '#fff' };

const OnboardingScreen = (props) => {

    return (
        <Onboarding
            onDone={() => props.navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#fac020',
                    image: <Image source={require('../images/5.png')} style={{ width, height: height / 2 }} />,
                    title: 'Best Digital EBook',
                    subtitle: 'Read across categories and save your favorities to your library.',
                },
                {
                    backgroundColor: '#fac020',
                    image: <Image source={require('../images/3.png')} style={{ width, height: height / 2 }} />,
                    title: 'Achieve Your Goals',
                    subtitle: 'Read the best books first.you may not have a chance to read them at all.',
                },
                {
                    backgroundColor: '#fac020',
                    image: <Image source={require('../images/3.png')} style={{ width, height: height / 2 }} />,
                    title: 'Stayed Updated',
                    subtitle: 'Get latest updates on Books,Authors and favoriate categories.',
                },

            ]}
        />
    );
};

export default OnboardingScreen;