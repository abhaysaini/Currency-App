import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRuppe = {
    DOLLAR: 0.014,
    EURO: 0.012,
    POUND: 0.011,
    RUBEL: 0.93,
    AUSDOLLAR: 0.2,
    CANDOLLAR: 0.019,
    YEN: 1.54,
    DINAR: 0.0043,
    BITCOIN: 0.000004,
}


const App = () => {

    const [inputValue, setInputValue] = useState(0);
    const [resultValue, setResultValue] = useState(0);
    const buttonPressed = (currency) => {
        if(!inputValue){
            return Snackbar.show({
                text: 'Please enter a value!!',
                backgroundColor:'#FF6666',
                textColor:"white",
                duration:Snackbar.LENGTH_SHORT,
              });
        }
        const result = parseFloat(inputValue)*currencyPerRuppe[currency];
        setResultValue(result.toFixed(4));
        setInputValue(0);
    }

    return (
        <>
            {/* <statusbar /> */}
            <ScrollView keyboardShouldPersistTaps='handled'
                contentInsetAdjustmentBehavior='automatic'>
                <SafeAreaView style={styles.container}>
                    <View style={styles.resultcontainer}>
                        <Text style={styles.resultValue}>
                            {resultValue}
                        </Text>
                    </View>
                    <View style={styles.inputcontainer}>
                        <TextInput
                            style={styles.inputValue}
                            placeholder="Enter Number ?"
                            keyboardType="numeric"
                            placeholderTextColor="white"
                            value={inputValue}
                            onChangeText={(inputValue)=>setInputValue(inputValue)}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.button}>
                        {Object.keys(currencyPerRuppe).map((currency) => (
                            <TouchableOpacity
                                key={currency}
                                style={styles.insideButton}
                                onPress={()=>buttonPressed(currency)}
                            >
                                <Text style={styles.buttonText}>
                                    {currency}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultcontainer: {
        height: 70,
        marginTop: 80,
        borderWidth: 2,
        borderColor: "#bbe1fa",
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultValue: {
        fontSize: 30,
        color: 'white',
        fontWeight: "bold",
    },
    inputcontainer: {
        height: 70,
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#bbe1fa',
        justifyContent: "center",
        alignItems: "center",
    },
    inputValue: {
        fontSize: 28,
        textAlign: "center",
        color: 'white'
    },
    button: {
        flexWrap: "wrap",
        flexDirection: 'row',
        marginTop: 15,

    },
    insideButton: {
        height: 100,
        borderWidth: 2,
        borderColor: '#bbe1fa',
        justifyContent: "center",
        alignItems: "center",
        width: "33.3%",
        marginTop: 12,
        backgroundColor: '#0f4c75',
    },
    buttonText: {
        fontSize: 15,
        color: "white",
    }
})