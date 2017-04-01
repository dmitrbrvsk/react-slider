import { SET_COLOR_SLIDE } from '../constants'

export const setColorSlide = payload => {
  return (dispatch) => {
      dispatch({
        type: SET_COLOR_SLIDE,
        payload: {
          currentColor: payload.currentColor
        }
      })
   }
};