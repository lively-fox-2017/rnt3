import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  board: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tiles: {
    display: 'flex',
    width: '30%',
    height: 100,
    borderWidth: 0.2,
    borderColor: '#aaa',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  xo: {
    fontSize: 25,
  }
});

export default styles;
