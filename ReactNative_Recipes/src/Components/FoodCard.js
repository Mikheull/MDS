import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const FoodCard = ({ result }) => {

    return (
        <View style={styles.cardStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image }} />
            <Text style={styles.headingStyle}>{result.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    cardStyle: {
        borderStyle: 'solid',
        borderRadius: 10,
        //borderWidth: 5,
        //borderColor: "#B7B7A4",
        borderColor: "#A5A58D",
        marginVertical: 15,
        marginHorizontal: 11,
        width: 315,
        height: 480,
        backgroundColor: "#FFFFFF",



        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },

    headingStyle: {
        marginVertical: 5,
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        alignSelf: 'center',
        textAlign: 'center'
    },

    imageStyle: {
        width: 290,
        alignSelf: 'center',
        height: 200,
        borderRadius: 10,
        margin: 5
    },

});

export default FoodCard;