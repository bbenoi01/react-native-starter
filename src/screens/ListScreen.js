import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontSize: 25
    },
    textStyle: {
        marginVertical: 50
    }
})

export default class ListScreen extends Component {
    render() {
        const friends = [
            { name: 'Matt', age: 38 },
            { name: 'Cristina', age: 36 },
            { name: 'Rodney', age: 44 },
            { name: 'Paul', age: 46 },
            { name: 'Dan', age: 44 },
            { name: 'Art', age: 44 },
            { name: 'Buddy', age: 36 }
        ]

        return (
            <View>
                <Text style={styles.header}>List Screen</Text>
                <FlatList
                    // horizontal
                    // showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={friends}
                    keyExtractor={friend => friend.name}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                        )
                    }}
                />
            </View>
        );
    }
}