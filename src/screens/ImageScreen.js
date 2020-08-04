import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from '../components/ImageDetail';

const styles = StyleSheet.create({
    header: {
        fontSize: 25
    }
})

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.header}>
                Image Screen
            </Text>
            <ImageDetail
                title='Forest'
                imageSource={require('../../assets/forest.jpg')}
                score={9}
            />
            <ImageDetail
                title='Beach'
                imageSource={require('../../assets/beach.jpg')}
                score={10}
            />
            <ImageDetail
                title='Mountain'
                imageSource={require('../../assets/mountain.jpg')}
                score={7}
            />
        </View>
    )
};

export default ImageScreen;