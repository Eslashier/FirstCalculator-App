import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './CalculatorButtonStyle';

interface Props {
  text: string;
  isButtonZero?: boolean;
  isButtonOperation?: boolean;
  isButtonTop?: boolean;
  isButtonNumber?: boolean;
  action: () => void;
}

export const CalculatorButton = ({
  text,
  isButtonZero,
  isButtonOperation,
  isButtonTop,
  isButtonNumber,
  action,
}: Props) => {
  return (
    <Pressable
      style={{
        ...(isButtonZero ? styles.containerNumber0 : ''),
        // eslint-disable-next-line prettier/prettier
        ...(isButtonOperation ? styles.containerOperations : ''),
        // eslint-disable-next-line prettier/prettier
        ...(isButtonTop ? styles.containerUpperOperations : ''),
        // eslint-disable-next-line prettier/prettier
        ...(isButtonNumber ? styles.containerNumber : ''),
      }}
      onPress={action}>
      <Text
        style={{
          ...(isButtonTop ? styles.buttonBlack : styles.buttonText),
        }}>
        {text}
      </Text>
    </Pressable>
  );
};
