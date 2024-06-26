import axios from "axios";
import {StyleSheet, Text, View} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../store/auth-context";

function WelcomeScreen() {
    const [fetchedMessage, setFetchedMessage] = useState('');
    const authCtx = useContext(AuthContext);
    const token=authCtx.token;
    useEffect(() => {
        axios.get('https://react-native-course-6e7a5-default-rtdb.europe-west1.firebasedatabase.app/?auth'+token)
            .then((response) => {
                setFetchedMessage(response.data);
            });
    }, []);
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
            <Text>{fetchedMessage}</Text>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
