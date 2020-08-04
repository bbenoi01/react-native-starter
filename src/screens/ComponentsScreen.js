import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = 'Brandon';
    
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;

// import React, { Component } from 'react';
// import { Text, View } from "react-native";

// export default class ComponentsScreen extends Component {
//     render() {
//         const greeting = [ "Hi there!", "Go fuck yourself" ];

//         return (
//             <View>
//                 <Text style={{ fontSize: 30 }}>This is the components screen</Text>
//                 <Text>{greeting}</Text>
//             </View>
//         );
//     }
// }