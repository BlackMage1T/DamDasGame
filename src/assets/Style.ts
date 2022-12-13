import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Point: {
    backgroundColor: '#FFFFFF',
    width: 30,
    height: 30,
  },
  Player: {
    backgroundColor: '#0000FF',
    width: 30,
    height: 30,
  },
  Bot: {
    backgroundColor: '#FF0000',
    width: 30,
    height: 30,
  },
  PlayerWindow: {
    minHeight: 65,
    backgroundColor: '#ffffff',
  },
  PlayerText: {
    fontSize: 30,
    textAlignVertical: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  Diff: {
    fontSize: 40,
    textAlignVertical: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#220055',
    borderColor: '#000000',
    textShadowColor: '#000000',
    textShadowOffset: { width: 4, height: 2 },
  },
  Easy: {
    minHeight: 65,
    fontSize: 40,
    textAlignVertical: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#0000f0',
    borderColor: '#000000',
    borderRadius: 20,
    borderWidth: 2,
  },
  Normal: {
    minHeight: 65,
    fontSize: 40,
    textAlignVertical: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#000000',
    backgroundColor: '#ffff00',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 20,
  },
  Hard: {
    minHeight: 65,
    fontSize: 40,
    textAlignVertical: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#f00000',
    borderColor: '#000000',
    borderRadius: 20,
    borderWidth: 2,
  },
  Board: {
    minHeight: 500,
  },
  p1: {
    position: 'absolute',
    top: '7%',
    left: '23%',
    alignSelf: 'center',
  },
  p2: {
    position: 'absolute',
    top: '7%',
    alignSelf: 'center',
  },
  p3: {
    position: 'absolute',
    top: '7%',
    left: '70%',
    alignSelf: 'center',
  },
  p4: {
    position: 'absolute',
    top: '25%',
    left: '3%',
    alignSelf: 'center',
  },
  p5: {
    position: 'absolute',
    top: '25%',
    alignSelf: 'center',
  },
  p6: {
    position: 'absolute',
    top: '25%',
    left: '90%',
    alignSelf: 'center',
  },
  p7: {
    position: 'absolute',
    top: '47%',
    left: '3%',
    alignSelf: 'center',
  },
  p8: {
    position: 'absolute',
    top: '47%',
    alignSelf: 'center',
  },
  p9: {
    position: 'absolute',
    top: '47%',
    left: '90%',
    alignSelf: 'center',
  },
  p10: {
    position: 'absolute',
    top: '69%',
    left: '3%',
    alignSelf: 'center',
  },
  p11: {
    position: 'absolute',
    top: '69%',
    alignSelf: 'center',
  },
  p12: {
    position: 'absolute',
    top: '69%',
    left: '90%',
    alignSelf: 'center',
  },
  p13: {
    position: 'absolute',
    top: '87%',
    left: '23%',
    alignSelf: 'center',
  },
  p14: {
    position: 'absolute',
    top: '87%',
    alignSelf: 'center',
  },
  p15: {
    position: 'absolute',
    top: '87%',
    left: '70%',
    alignSelf: 'center',
  },
  containerSoal: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    margin: 20,
    padding: 10,
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 20,
  },
  timeRemaining: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  timeRemainingFont: {
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: 20,
    padding: 7,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
  },
  questions: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    minHeight: 150,
  },
  questionsFont: {
    color: '#000000',
    fontSize: 24,
    padding: 7,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  answers: {
    backgroundColor: '#ed8b6f',
    borderWidth: 2,
    borderRadius: 10,
  },
  answerFont: {
    color: '#ffffff',
    fontSize: 14,
    padding: 2,
    margin: 10,
    textAlign: 'center',
    alignContent: 'center',
  },
  answersOption1: {
    backgroundColor: '#29a11a',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
  answersOption2: {
    backgroundColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
  answersOption3: {
    backgroundColor: '#cccc21',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
  answersOption4: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
  },
  WinScreen: {
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  WinFont: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
})

function radius(n: number) {
  return Math.sqrt(2 * n * n)
}

export default styles
