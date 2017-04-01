import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sliderAction from './actions/Slider'
import MySlider from './components/Slider.jsx'
import SliderItem from './components/SliderItem.jsx'
import './common.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MySlider>
          {this.props.slider.slides.map((slide, indx) => (
            <div key={indx}>
              <SliderItem 
                key={indx}
                id={slide.id} 
                title={slide.title}
                subtitle={slide.subtitle}
                currentColor={this.props.slider.currentColor}
              /> 
            </div>
          ))}
        </MySlider>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    slider: state.slider
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sliderAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
