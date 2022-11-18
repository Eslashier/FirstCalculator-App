import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CalculatorButton} from '../components/CalculatorButton';
import {styles} from '../theme/CalculatorTheme';

export const Calculator = () => {
  const [history, setHistory] = useState('0');
  const [operation, setOperation] = useState('');
  const [number, setNumber] = useState('0');
  const [tempNumber, setTempNumber] = useState('0');

  const addNumber = (e: string) => {
    if (number === '0') {
      setNumber(e);
      return;
    }
    if (number.length > 9) {
      return;
    }
    setNumber(number + e);
    return;
  };

  const decimal = (e: string) => {
    if (number.includes('.')) {
      return;
    }
    setNumber(number + e);
  };

  const deleteNumber = () => {
    const operator = history.includes('+' || '-' || 'x' || '÷');
    if (
      number.length === 1 ||
      (number.charAt(0) === '-' && number.length === 2)
    ) {
      setNumber('0');
      return;
    } else if (operator && operation === '') {
      clearCalculator();
    }
    setNumber(number.slice(0, -1));
    return;
  };

  const clearCalculator = () => {
    setNumber('0');
    setHistory('0');
    setOperation('');
    setTempNumber('0');
    return;
  };

  const selectOperation = (e: string) => {
    let lastChar = history.slice(-1);
    if (
      (lastChar === '+' ||
        lastChar === '-' ||
        lastChar === 'x' ||
        lastChar === '÷') &&
      number === '0'
    ) {
      setOperation(e);
      setHistory(tempNumber + e);
      return;
    }
    if (tempNumber && number !== '0' && operation) {
      setHistory(history + number);
      setNumber(operationCalc(operation).toString());
      return;
    }
    setOperation(e);
    setTempNumber(number);
    setHistory(number + e);
    setNumber('0');
    return;
  };

  const operationCalc = (symbol: string) => {
    if (symbol === '+') {
      return +number + +tempNumber;
    } else if (symbol === '-') {
      return -number + +tempNumber;
    } else if (symbol === 'x') {
      return +number * +tempNumber;
    } else if (symbol === '÷') {
      if (tempNumber === '0') {
        return 'Math error';
      }
      return +number / +tempNumber;
    }
    return '';
  };

  const operate = () => {
    if (operation === '') {
      return;
    }
    setNumber(operationCalc(operation).toString());
    setHistory(history + number);
    setOperation('');
  };

  const signChange = () => {
    if (+number >= 0) {
      return setNumber('-' + number);
    }
    return setNumber(number.slice(1));
  };

  return (
    <>
      <View style={styles.containerOperation}>
        <Text style={styles.textOperation}>{history}</Text>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.textInput}>{number}</Text>
      </View>
      <View style={styles.containerButtons}>
        <View style={styles.containerRow}>
          <CalculatorButton
            text="C"
            isButtonTop={true}
            action={() => {
              clearCalculator();
            }}
          />
          <CalculatorButton
            text="+/-"
            isButtonTop={true}
            action={() => {
              signChange();
            }}
          />
          <CalculatorButton
            text="del"
            isButtonTop={true}
            action={() => {
              deleteNumber();
            }}
          />
          <CalculatorButton
            text="÷"
            isButtonOperation={true}
            action={() => {
              selectOperation('÷');
            }}
          />
        </View>
        <View style={styles.containerRow}>
          <CalculatorButton
            text="7"
            isButtonNumber={true}
            action={() => {
              addNumber('7');
            }}
          />
          <CalculatorButton
            text="8"
            isButtonNumber={true}
            action={() => {
              addNumber('8');
            }}
          />
          <CalculatorButton
            text="9"
            isButtonNumber={true}
            action={() => {
              addNumber('9');
            }}
          />
          <CalculatorButton
            text="x"
            isButtonOperation={true}
            action={() => {
              selectOperation('x');
            }}
          />
        </View>
        <View style={styles.containerRow}>
          <CalculatorButton
            text="4"
            isButtonNumber={true}
            action={() => {
              addNumber('4');
            }}
          />
          <CalculatorButton
            text="5"
            isButtonNumber={true}
            action={() => {
              addNumber('5');
            }}
          />
          <CalculatorButton
            text="6"
            isButtonNumber={true}
            action={() => {
              addNumber('6');
            }}
          />
          <CalculatorButton
            text="-"
            isButtonOperation={true}
            action={() => {
              selectOperation('-');
            }}
          />
        </View>
        <View style={styles.containerRow}>
          <CalculatorButton
            text="1"
            isButtonNumber={true}
            action={() => {
              addNumber('1');
            }}
          />
          <CalculatorButton
            text="2"
            isButtonNumber={true}
            action={() => {
              addNumber('2');
            }}
          />
          <CalculatorButton
            text="3"
            isButtonNumber={true}
            action={() => {
              addNumber('3');
            }}
          />
          <CalculatorButton
            text="+"
            isButtonOperation={true}
            action={() => {
              selectOperation('+');
            }}
          />
        </View>
        <View style={styles.containerRow}>
          <CalculatorButton
            text="0"
            isButtonZero={true}
            action={() => {
              addNumber('0');
            }}
          />
          <CalculatorButton
            text="."
            isButtonNumber={true}
            action={() => {
              decimal('.');
            }}
          />
          <CalculatorButton
            text="="
            isButtonOperation={true}
            action={() => {
              operate();
            }}
          />
        </View>
      </View>
    </>
  );
};
