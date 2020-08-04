// import React, {useState} from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ColorCounter from '../components/ColorCounter';

// const COLOR_INCREMENT = 15;

// const SquareScreen = () => {
//     const [red, setRed] = useState(0);
//     const [green, setGreen] = useState(0);
//     const [blue, setBlue] = useState(0);

//     console.log(green);
//     return (
//         <View>
//             <Text>
//                 Square Screen
//             </Text>
//             <ColorCounter
//                 onIncrease={() => red <= 240 ? setRed(red + COLOR_INCREMENT) : null}
//                 onDecrease={() => red > 0 ? setRed(red - COLOR_INCREMENT) : setRed(0)}
//                 color='Red'
//             />
//             <ColorCounter
//                 onIncrease={() => green <= 240 ? setGreen(green + COLOR_INCREMENT) : null}
//                 onDecrease={() => green > 0 ? setGreen(green - COLOR_INCREMENT) : setGreen(0)}
//                 color='Green'
//             />
//             <ColorCounter
//                 onIncrease={() => blue <= 240 ? setBlue(blue + COLOR_INCREMENT) : null}
//                 onDecrease={() => blue > 0 ? setBlue(blue - COLOR_INCREMENT) : setBlue(0)}
//                 color='Blue'
//             />
//             <View
//                 style={{
//                     height: 150,
//                     width: 150,
//                     backgroundColor: `rgb(${red},${green},${blue})`
//                 }}
//             />
//         </View>
//     )
// };

// export default SquareScreen;


import React, {useReducer} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
            break;

        case 'green':
            return { ...state, green: state.green + action.amount };
            break;

        case 'blue':
            return { ...state, blue: state.blue + action.amount };
            break;
    
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});

    console.log(green);
    return (
        <View>
            <Text>
                Square Screen
            </Text>
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color='Red'
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color='Green'
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color='Blue'
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    )
};

export default SquareScreen;