import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { ActivityIndicator,View ,SafeAreaView, Text, FlatList,TouchableOpacity, Image, StyleSheet, Button } from "react-native";


  const HomeScreen =  props => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
  
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
    
      <Button style={styles.title} onPress={() => props.navigation.navigate('Details',{
            title : item.title,
            releaseyear : item.releaseYear,
            
        })}  title = {item.title} /> 
      
      
    </View>
  
  );
 
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
          
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
            
        
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
        backgroundColor: '#FF6347',
        padding: 20,
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 15,
      },
  });
  
  export default HomeScreen;