import React, {useState} from 'react'
import {StyleSheet, Alert, View, ScrollView} from 'react-native';
import {Navbar} from "./src/Navbar"
import {AddTodo} from "./src/AddTodo"
import {Todo} from "./src/Todo"


export default function App() {

    const [todos,setTodos] = useState([])

    const addTodo = (title)=> {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title: title,
        }])
    }
    const showConfirmDialog = (id) => {
        return Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this beautiful box?",
            [
                // The "Yes" button
                {
                    text: "Yes",
                    onPress: () => {

                            setTodos(prev => prev.filter(todo => todo.id !== id))
                    },
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "No",
                },
            ]
        );
    };

    return (
        <View>
            <Navbar></Navbar>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}></AddTodo>

                <ScrollView>
                    {todos.map(todo => {
                       return <Todo todo={todo} key={todo.id} onRemove={showConfirmDialog}></Todo>
                    })}
                </ScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
});
