import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';



class HomeScreen extends Component {

  render() {
    return (
    <View
    
    style={styles.HomeScreenStyle}>
      <Text>We Are On the Home Screen</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    HomeScreenStyle:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle:{
     color: 'red'
    }
  });


  export {HomeScreen};