import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import FoodCard from './FoodCard';

const RecipesList = ({ datas, navigation }) => {
    return (
        <View style={styles.metaStyle}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={datas}
                keyExtractor={(datas) => datas.title}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('Recipe', { item: item})} >
                            <FoodCard result={item} />
                        </TouchableOpacity>
                    )
                }}
                navigation={navigation}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    dirStyle: {
        textAlign: 'center',
        marginBottom: 50,
        fontSize: 20
    },

    metaStyle: {
        backgroundColor: "#FFF1E6",
        flex: 1
    }

});

export default RecipesList;