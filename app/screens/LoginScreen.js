import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function loginScreen(props) {
    return (
        <ImageBackground 
            style={style.background}
            source={require('../assets/favicon.png')}
        ></ImageBackground>
    );
}


const styles = StyleSheet.create({
    background:{
        flex: 1,

    }
})

export default loginScreen;