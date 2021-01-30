import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class Main extends React.Component {
    render(){
        let icon;
        let text;
        if (this.props.val.status) {
            icon = require("../../assets/circle.png");    
            text = <Text style={styles.taskText}>{this.props.val.task}</Text>;    
        } else {      
            icon = require("../../assets/check-circle.png");    
            text = <Text style={styles.taskTextEnded}>{this.props.val.task}</Text>;    
        }

        return (
            <View key={this.props.keyval} style={styles.task}>
                <TouchableOpacity style={styles.taskStatus} activeOpacity={0.5} onPress={this.props.switchStateMethod}>
                    <Image style={styles.taskStatusImage} source={icon}/>
                    <Text style={styles.TextStyle}> {text} </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.taskDelete}>
                    <Image source={require("../../assets/trash.png")}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    task: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    taskText: {
        paddingLeft: 5,
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        color: '#E91E63',
        fontSize: 20,
    },
    taskTextEnded: {
        paddingLeft: 5,
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        color: '#979bbd',
        fontStyle: 'italic',
        fontSize: 20,
        textDecorationLine: 'line-through',
    },

    taskDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        bottom: 10,
        right: 10,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
    },

    taskStatus: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        top: 10,
        bottom: 10,
        left: 10,
        flexDirection:"row",
        alignItems:'center',
    },
    taskStatusImage: {
        width: 16,
        height: 16
    }
});