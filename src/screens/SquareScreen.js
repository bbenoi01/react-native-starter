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
    const { type, payload } = action;
    switch (type) {
        case 'change_red':
            return state.red + payload > 255 || state.red + payload < 0
            ? state
            : { ...state, red: state.red + payload };

        case 'change_green':
            return state.green + payload > 255 || state.green + payload < 0
            ? state
            : { ...state, green: state.green + payload };

        case 'change_blue':
            return state.blue + payload > 255 || state.blue + payload < 0
            ? state
            : { ...state, blue: state.blue + payload };
    
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    console.log(green);
    return (
        <View>
            <Text>
                Square Screen
            </Text>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) }
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) }
                color='Green'
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) }
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