import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  backgroundColor?: string;
  text?: string;
}

export default function MyComponent(props: Props) {
  const { backgroundColor = 'green', text = 'Hello' } = props;

  return (
    <View style={{ backgroundColor }}>
      <Text>{text}</Text>
    </View>
  );
}