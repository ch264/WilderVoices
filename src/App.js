import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';


import InsideApp from './components/InsideApp';

class App extends Component {

  render() {
    return (
    // <View
    
    // style={styles.AppStyle}>
    //   <Text>Wilder Voices</Text>
    // </View>

    <InsideApp/>
    );
  }
}



// export default App;



const styles = StyleSheet.create({
    AppStyle:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle:{
     color: 'red'
    }
  });


  export default (App);