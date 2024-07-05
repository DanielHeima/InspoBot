import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10
  },
  convoBubble: {
    margin: 5,
    maxWidth: '80%',
    padding: 30,
    borderRadius: 50,
  },
  byBot: {
    alignSelf: 'flex-start'
  },
  byUser: {
    alignSelf: 'flex-end'
  }
})