import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.statContainer}>
                <View>
                    <Text style={styles.statLeftNumber}>{this.props.total}</Text>
                    <Text style={styles.statLeftTitle}>Tâches</Text>
                </View>
                <View>
                    <Text style={styles.statRightNumber}>{this.props.totalended}</Text>
                    <Text style={styles.statRightTitle}>Tâches terminées</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    statLeftNumber: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#E91E63',
        fontSize: 20,
    },

    statLeftTitle: {
        textAlign: 'left',
        color: '#979bbd',
        fontStyle: 'italic'
    },

    statRightNumber: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#E91E63',
        fontSize: 20,
    },

    statRightTitle: {
        textAlign: 'right',
        color: '#979bbd',
        fontStyle: 'italic'
    },
});