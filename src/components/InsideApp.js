import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';


class InsideApp extends Component {

  render() {
    return (
    <View
    
    style={styles.InsideAppStyle}>
      <Text>We Are InSideAPP</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    InsideAppStyle:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle:{
     color: 'red'
    }
  });


  export default InsideApp;