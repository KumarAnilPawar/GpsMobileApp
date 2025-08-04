import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useOktaLoginViewModel } from '../OktaLoginViewModel';

type Props = {
  testID?: string;
};
const OktaLoginScreen: React.FC<Props> = ({ testID }) => {
  const { user, loading, login } = useOktaLoginViewModel();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View testID={testID}>
      <View style={{ padding: 16 }}>
        <TextInput
          testID="email-input"
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text.toLowerCase())}
          autoCapitalize="none"
          style={{ marginBottom: 8, borderWidth: 1, padding: 8 }}
        />
        <TextInput
          testID="password-input"
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={{ marginBottom: 8, borderWidth: 1, padding: 8 }}
        />
        <Button
          testID="login-button"
          title={loading ? 'Logging in...' : 'Login'}
          onPress={() => login(email)}
        />
      </View>
      {user && (
        <View style={{ padding: 16 }} testID="user-info">
          <Text>Welcome, {user.name}!</Text>
          <Text>Email: {user.email}</Text>
        </View>
      )}
      {!user && !loading && (
        <View style={{ padding: 16 }} testID="login-prompt">
          <Text>Please log in to continue.</Text>
        </View>
      )}
    </View>
  );
};

export default OktaLoginScreen;
