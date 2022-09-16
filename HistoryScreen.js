import React from'react';
import { View, Text, StyleSheet, FlatList } from'react-native';
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

export default function HistoryScreen({ route, navigation }) {
    const {calculations} = route.params;

    return (
        <View style={styles.container}>

        <Text>History:</Text>

        <FlatList
          data={calculations.data}
          renderItem={({item}) => <Text>{item.key}</Text> }
          keyExtractor={(item, index) => index.toString()}  
        />

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});