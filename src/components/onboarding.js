import { Image, } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import styles from './style';

export default function OnboardingScreen(props) {
    return (
        <Onboarding
            titleStyles={{ fontFamily: "NotoSerifGeorgian-VariableFont_wdth,wght", color: 'white' }}
            subTitleStyles={{ fontFamily: "NotoSerifGeorgian-VariableFont_wdth,wght", color: 'white' }}
            onDone={() => props.navigationprop()}
            pages={[
                {
                    backgroundColor: '#45AE9E',
                    image: <Image source={require('../images/5.png')} style={styles.screensize} />,
                    title: 'Best Digital EBook',
                    subtitle: 'Read across categories and save your favorities to your library.',
                },
                {
                    backgroundColor: '#45AE9E',
                    image: <Image source={require('../images/3.png')} style={styles.screensize} />,
                    title: 'Achieve Your Goals',
                    subtitle: 'Read the best books first.you may not have a chance to read them at all.',
                },
                {
                    backgroundColor: '#45AE9E',
                    image: <Image source={require('../images/14.png')} style={styles.screensize} />,
                    title: 'Stayed Updated',
                    subtitle: 'Get latest updates on Books,Authors and favoriate categories.',
                },

            ]}
        />
    )
}