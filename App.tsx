import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

const options: number[] = [];

for (let index = 1; index <= 12; index++) {
  options.push(index);
}

const App = () => {
  const [servings, setServings] = useState<number>(1);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.sectionContainer}>
            <Text style={styles.text}>
              How many servings of long grain rice do you want to make?
            </Text>
            <Picker
              selectedValue={servings}
              onValueChange={(value) =>
                typeof value === 'number' && setServings(value)
              }>
              {options.map((option) => (
                <Picker.Item
                  label={option.toString()}
                  value={option}
                  key={option}
                />
              ))}
            </Picker>
            <View style={styles.result}>
              <Text style={resultTextStyle}>Here's what you need:</Text>
              <Text style={resultTextStyle}>
                🍚 {servings * 50}g of long grain rice
              </Text>
              <Text style={resultTextStyle}>🧂 {servings * 2}g of salt</Text>
              <Text style={resultTextStyle}>
                🚰{' '}
                {Math.round(
                  -0.001573 * Math.pow(servings * 50, 2) +
                    2.441 * (servings * 50) -
                    63,
                )}
                g of water
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#fefdff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  result: {
    marginTop: 100,
    backgroundColor: '#8dbbf2',
    borderRadius: 15,
    padding: 15,
  },
  text: {
    fontSize: 26,
  },
  whiteText: {
    color: 'white',
  },
});

const resultTextStyle = StyleSheet.flatten([styles.text, styles.whiteText]);

export default App;
