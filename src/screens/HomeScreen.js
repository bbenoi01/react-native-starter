import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>New Shit</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


// import React, { Component } from 'react';
// import { Text, View, Button, TouchableOpacity } from "react-native";

// export default class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//   }

//   handleButtonPress = () => {
//     const props = this.props;
//     props.navigation.navigate('Components')
//   }

//   handleOpacityPress = () => {
//     const props = this.props;
//     props.navigation.navigate('List')
//   }

//   render() {
//     return (
//       <View>
//         <Text style={{ fontSize: 30 }}>New Shit</Text>
//         <Button
//           title='Go to Components Demo'
//           onPress={this.handleButtonPress}
//         />
//         <TouchableOpacity onPress={this.handleOpacityPress}>
//           <Text>Go to List Demo</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
