import { StyleSheet, Text, View } from 'react-native';
import OktaLoginScreenController from './src/features/OktaLogin/screens/OktaLoginScreenController';

function App() {
  return (
    <View style={styles.container}>
      <Text testID="welcome_text" style={styles.textStyle}>
        Welcome to Detox
      </Text>
      <OktaLoginScreenController testID="okta-login-screen-controller" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
