import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    price: {
        textAlign: 'right',
        fontSize: 14,
        fontStyle: 'italic',
    },
})