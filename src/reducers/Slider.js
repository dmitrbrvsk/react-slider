
import { SET_COLOR_SLIDE } from '../constants'

const initialState = {
  slides: [
    {
      id: 1,
      title: 'Ищи то, что тебе нужно!',
      subtitle: 'Удобный поиск людей это то, чего действительно тебе не хватало. http://github.com/OpenGov/react-autolink-text. Не останавливайся на достигнутом',
      color: '#2870c4'
    },
    {
      id: 2,
      title: 'Ищи то, что тебе нужно!',
      subtitle: 'Удобный поиск людей это то, чего действительно тебе не хватало. http://github.com/OpenGov/react-autolink-text. Не останавливайся на достигнутом',
      color: '#4bc9e5'
    },
    {
      id: 3,
      title: 'Ищи то, что тебе нужно!',
      subtitle: 'Удобный поиск людей это то, чего действительно тебе не хватало. http://github.com/OpenGov/react-autolink-text. Не останавливайся на достигнутом',
      color: '#47b616'
    },
    {
      id: 4,
      title: 'Ищи то, что тебе нужно!',
      subtitle: 'Удобный поиск людей это то, чего действительно тебе не хватало. http://github.com/OpenGov/react-autolink-text. Не останавливайся на достигнутом',
      color: '#ff7d00'
    },
    {
      id: 5,
      title: 'Ищи то, что тебе нужно!',
      subtitle: 'Удобный поиск людей это то, чего действительно тебе не хватало. http://github.com/OpenGov/react-autolink-text. Не останавливайся на достигнутом',
      color: '#e330a6'
    },
    {
      id: 6,
      title: 'Ищи то, что тебе нужно!',
      subtitle: 'Удобный поиск людей это то, чего действительно тебе не хватало. http://github.com/OpenGov/react-autolink-text. Не останавливайся на достигнутом',
      color: '#2870c4'
    }

  ],
  currentColor: null
}

export let sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR_SLIDE:
      return { ...state, currentColor: action.payload.currentColor}
      break
    default:
      return state
  }
}