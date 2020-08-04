import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    header: {
        fontSize: 15
    },
    score: {
        fontSize: 10
    }
})

const ImageDetail = props => {
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text style={styles.header}>
                {props.title}
            </Text>
            <Text style={styles.score}>
                Image Score - {props.score}
            </Text>
        </View>
    )
};

export default ImageDetail;