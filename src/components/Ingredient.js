import React, { useEffect, useState } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function Family(props){
    const {item, onPress} = props;
    const {name, image} = item;


    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: "https://spoonacular.com/cdn/ingredients_100x100/"+image}}/>
                <Text style={styles.title}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F7AD05',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    image: {
        backgroundColor: "grey",
        borderRadius: 5,
        aspectRatio: 1,
        height: 40,
        width: 40,
        marginRight: 5,
    },
});