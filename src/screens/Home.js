import React, {useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, Platform, Button} from 'react-native';

export default function Home(props){

    const {navigation} = props;

    const onPressToList = useCallback(() => {
        navigation.navigate('Recipes');
    }, [navigation]);

    return(
        <View style={styles.container}>
            <Image style={styles.header} resizeMode={'cover'} source={require('../images/header.png')}/>
            <Text style={styles.welcome}>Welcome to the Home made recipe application number one !</Text>
            <TouchableHighlight style ={styles.button}>
                <Button onPress={onPressToList} style={styles.button} color= '#069F9D' title="See all species" />
            </TouchableHighlight>
            <Image style={styles.footer} source={require('../images/cook.jpg')}/>
        </View>
    );
}

const platformText = Platform.select({
    android: 'You are currently on an Android App',
    ios: 'You are currently on an iOS App',
});

const platformTextColor = Platform.select({
    android: '#08B6CE',
    ios: '#FFA500',
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingTop: 20,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    platformText: {
        fontSize: 24,
        textAlign: 'center',
        color: platformTextColor,
    },
    header: {
        width: '100%',
        height: 250,
    },
    button: {
        height: 40,
        width:160,
        marginTop: 40,
        backgroundColor: '#069F9D',
        borderRadius: 100/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        width: '100%',
        height: '40%',
        marginTop: 20,
    }
});