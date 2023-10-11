import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CustomButton({ text, route, style }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(route);
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        position: 'relative',
        backgroundColor: '#935026',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '-6%',
        alignItems: 'center',
        justifyContent: 'center',
    },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});