import { Platform, StyleSheet } from "react-native";
import { Constants } from "expo-constants";

export const lightTheme = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        paddingBottom:100,
        //paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    label: {
        backgroundColor: 'lightblue',
        borderWidth: 2,
    },
    text: {
        color: 'black',
        paddingBottom: 5,
        alignItems: 'center'
    },
    textOtsikkoIso: {
        fontSize: 25,
        fontWeight: 'bolder',
        marginTop: 20,
        color: 'green',
        marginBottom: 15,
    },
    textOtsikko: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:10
    },
    textInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        width: 40,
        margin: 5,
        height: 30,
    },
    result: {
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        color: 'black',
        width: 60,
        padding: 15,
        margin: 10
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingLeft: 10
    },
    switch: {
        color: 'purple',
        flexDirection: 'row'
    },
})

export const darkTheme = StyleSheet.create({
    main: {
        ...lightTheme.main,
        backgroundColor: 'black',
    },
    container: { 
        ...lightTheme.container,
        backgroundColor: 'black',
     },
    label: {
        ...lightTheme.label,
        backgroundColor: 'black',
    },
    text: {
        ...lightTheme.text,
        color: 'white'
    },
    textOtsikkoIso: {
        ...lightTheme.textOtsikkoIso,
        color: 'yellow',
    },
    textOtsikko: {
        ...lightTheme.textOtsikko,
        color: 'white',
    },
    textInput: {
        ...lightTheme.textInput,
        backgroundColor: '#fff',
        borderColor: 'black',
    },
    result: {
        ...lightTheme.result,
        backgroundColor: 'pink',
        color: 'blue'
    },
    field: {
        ...lightTheme.field,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingLeft: 10
    },
    switch: {
        ...lightTheme.switch,
        color: 'red'
    }
})

