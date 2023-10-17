import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () => {
        console.log(email + " " + password);
        // handle log in logic here
    };

    return (
        <View>
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
            />
            <Text>Password:</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
            />
            <TouchableOpacity onPress={handleLogIn}>
                <Text>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LogIn;
