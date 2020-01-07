import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText> The Game Is Over! </TitleText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/rick.png')} 
                style={styles.image} 
                resizeMode='contain' 
                />
            </View>
            <BodyText style={styles.resultText}> Your phone needed{''} <Text style={styles.highlight}>{props.roundsNumber} </Text> 
                        rounds to guess the number{''} <Text style={styles.highlight}>{props.userNumber} </Text>.
            </BodyText>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderColor: 'black',
        borderWidth: 3,
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30,
        marginVertical: 15
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultText: {
        textAlign: 'center',
        fontSize:20
    }
});

export default GameOverScreen;