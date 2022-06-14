import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export const AddTodo = ({onSubmit}) => {

    const [value,setValue] = useState('')

    const  pressHandler = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert("Поле дела пустое")
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Что нужно сделать?'
            ></TextInput>
            <Button title='Добавить' onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block : {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
    },
    input:{
        width:'70%',
        padding: 10,
        borderStyle:'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        marginBottom:10,


    },

})