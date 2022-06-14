import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = (props) => {
    return (
    <View style={styles.navbar}>
        <Text style={styles.text} >Todo App</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    navbar : {
        height:60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 6,
        backgroundColor: '#2165D5',
      },
    text: {
        fontSize: 18,
        color: 'white'
    }
})