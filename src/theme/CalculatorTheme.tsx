import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  containerOperation: {
    backgroundColor: 'black',
    flex: 2,
    justifyContent: 'flex-end',
    padding: 20,
  },
  textOperation: {
    color: 'gray',
    textAlign: 'right',
    fontSize: 30,
  },
  containerInput: {
    backgroundColor: 'black',
    color: 'gray',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    paddingRight: 20,
  },
  textInput: {
    color: 'white',
    textAlign: 'right',
    fontSize: 50,
  },
  containerButtons: {
    color: 'gray',
    flex: 8,
    justifyContent: 'space-around',
  },
  containerRow: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
