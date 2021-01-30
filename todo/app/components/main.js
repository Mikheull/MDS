import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './task'
import Stats from './stats'
import moment from 'moment/min/moment-with-locales' 

export default class Main extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            taskArray: [],
            taskText: '',
            totalTask: 0,
            totalTaskEnded: 0
        }
    }

    render(){
        moment.locale('fr') 


        let tasks = this.state.taskArray.map((val, key) =>{
            return <Note 
                key={key} 
                keyval={key} 
                val={val} 
                deleteMethod={() => this.deleteTask(key)} 
                switchStateMethod={() => this.switchTask(key)} />
        })

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{moment().format('dddd DD MMMM')}</Text>
                </View>

                <Stats total={this.state.totalTask} totalended={this.state.totalTaskEnded} />

                <ScrollView style={styles.scrollContainer}>
                    {tasks}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput 
                        style={styles.textInput} 
                        onChangeText={(taskText) => this.setState({taskText})} 
                        value={this.state.taskText} 
                        placeholder="Entrez votre tâche ici" 
                        placeholderTextColor="white" 
                        underlineColorAndroid="transparent">

                    </TextInput>
                </View>

                <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={this.addTask.bind(this)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

            </View>
        );
    }

    addTask() {
        if(this.state.taskText){
            this.state.taskArray.push({
                'task' : this.state.taskText,
                'status': 1,
            })

            this.setState({taskArray: this.state.taskArray});
            this.setState({taskText: this.state.taskText});
            this.setState({totalTask: this.state.totalTask + 1});
        }
    }

    deleteTask(key) {
        // Décompte total terminé
        if(this.state.taskArray[key].status == 0){
            this.setState({totalTaskEnded: this.state.totalTaskEnded - 1});
        }

        // Décompte total
        this.state.taskArray.splice(key, 1);
        this.setState({taskArray:this.state.taskArray});
        this.setState({totalTask: this.state.totalTask - 1});
    }


    switchTask(key) {
        let taskArray = [ ...this.state.taskArray ];
        taskArray[key] = (this.state.taskArray[key].status == 0) ? {...taskArray[key], status: 1} : {...taskArray[key], status: 0};
        this.setState({ taskArray });

        const new_total = (this.state.taskArray[key].status == 0) ? this.state.totalTaskEnded - 1 : this.state.totalTaskEnded + 1;
        this.setState({totalTaskEnded: new_total});
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 5,
      borderBottomColor: '#cc1855',
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      padding: 30,
      fontWeight: 'bold'
    },

    scrollContainer: {
      flex: 1,
      marginBottom: 100,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
    addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 5,
      backgroundColor: '#E91E63',
      width: 45,
      height: 45,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 24,
    },
});