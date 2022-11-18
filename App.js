import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import * as Progress from 'react-native-progress';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, onChangeText] = React.useState('');
  // const [text, onChangeNumber] = React.useState(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.log(text);
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      >
        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sectionTitle}> Progress Bar</Text>
            <Progress.Bar
              progress={text.length / 100}
              width={330}
              height={20}
              color={text.length == 100 ? 'red' : 'blue'}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sectionTitle}>Pi Bar</Text>
            <Progress.Pie
              progress={text.length / 100}
              size={250}
              color={text.length == 100 ? 'red' : 'blue'}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sectionTitle}>Text Here</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="Enter Text Here "
              maxLength={100}
              multiline={true}
            />
          </View>
          {/* <Progress.Bar progress={0.3} width={200} />
          <Progress.Pie progress={0.4} size={50} />
          <Progress.Circle size={30} indeterminate={true} />
          <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    // height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
});

export default App;
