import { combineReducers } from 'redux'
import { sliderReducer } from './Slider'

export default combineReducers({
    slider: sliderReducer
})