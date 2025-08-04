import React from 'react';
import OktaLoginScreen from './OktaLoginScreen';

type Props = {
  testID?: string;
};
const OktaLoginScreenController: React.FC<Props> = ({ testID }) => {
  return <OktaLoginScreen testID={testID} />;
};

export default OktaLoginScreenController;
