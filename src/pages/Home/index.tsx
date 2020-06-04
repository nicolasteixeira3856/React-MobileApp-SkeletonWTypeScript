import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = () => {
  return(
    <View style={styles.container}>
      <View style={styles.main}>
        <Text >Hello World!</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 120
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default Home;