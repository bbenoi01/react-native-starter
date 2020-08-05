import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        height: 200,
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    boxOneStyle: {
        // borderWidth: 3,
        // borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'red',
        // flex: 1,
        // alignSelf: 'center',
        // position: 'relative',
        // top: 10,
        // bottom: 10,
        // left: 10,
        // right: 10,
        // ...StyleSheet.absoluteFillObject
    },
    boxTwoStyle: {
        // borderWidth: 3,
        // borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'green',
        // flex: 1,
        // alignSelf: 'center',
        // position: 'absolute',
        top: 50,
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
    boxThreeStyle: {
        // borderWidth: 3,
        // borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'purple',
        // flex: 1,
        // alignSelf: 'center',
        // position: 'relative',
        // top: 10,
        // bottom: 10,
        // left: 10,
        // right: 10,
    }
})

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.boxOneStyle}/>
            <View style={styles.boxTwoStyle}/>
            <View style={styles.boxThreeStyle}/>
        </View>
    );
};

export default BoxScreen;