import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Calculator} from './src/screens/Calculator';
import {styles} from './src/theme/CalculatorTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
