import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View ,SafeAreaView, Text, FlatList,TouchableOpacity, Image, StyleSheet, Button } from "react-native";
import logo1 from '../assets/knives-out-final-poster.png'; 
import logo2 from '../assets/Avengers_Endgame_poster.png'; 
import logo3 from '../assets/aquietplace.png'; 
import logo4 from '../assets/wonder-woman-banner.png'; 


const DATA = [
    {
      key: '1',
      title: 'Knives Out',
      URL: logo1,
      
    },
    {
      key: '2',
      title: 'Avengers: Endgame',
      URL: logo2,
    },
    {
      key: '3',
      title: 'A Quiet Place',
      URL: logo3,
      
    },
    {
      key: '4',
      title: 'Wonder Woman',
      URL: logo4,
      
    },
    
  ];

  const HomeScreen =  props => {

  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
    
      <Button style={styles.title} onPress={() => props.navigation.navigate('Details',{
            title : item.title,
            URL : item.URL,
            
        })}  title = {item.title} /> 
      
      
    </View>
  
  );
 
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
          
            data={DATA}
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
  