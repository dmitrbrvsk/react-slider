import React, { Component } from 'react'
import Slider from 'react-slick'
import injectSheet from 'react-jss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as sliderAction from '../actions/Slider'

import './Slider.scss'

class LeftNavButton extends Component {
  render() {
    return (
      <div {...this.props} className='slider-arrow slider-arrow__left '>
        <div className='arrow' style={{boxShadow: `4px -4px 0 0 ${this.props.color} inset`}}></div>
      </div>
    )
  }
}

class RightNavButton extends Component {
  render() {
    return (
      <div {...this.props} className='slider-arrow slider-arrow__right'>
        <div className='arrow' style={{boxShadow: `-4px 4px 0 0 ${this.props.color} inset`}}></div>
      </div>
    )
  }
}

const stylesSliderDots = {
  active: {
    background: props => props.color,
    color: 'white',
    boxShadow: '0px 1px 0 0 rgba(0, 0, 0, 0.5)'
  }
}

class SliderDots extends Component {
  render() {
    const { slides, currSlide } = this.props
    return (
      <ul className='slider-dots'>
        {slides.map((item, indx) => {
          return <li
            key={indx} 
            className='slider-dots__inner' 
            onClick={this.props.handleGoToSlide.bind(this, indx)}
            >
              <div className={`slider-dots__item ${currSlide === indx ? this.props.classes.active : ''}`}>{indx + 1}</div>
            </li>
        })}
      </ul>
    )
  }
}

const SliderDotsWrapper = injectSheet(stylesSliderDots)(SliderDots)

class MySlider extends Component {

  state = { currSlide: 0 }

  componentWillMount() {
    this.getColorSlide()
  }

  next = () => {
    this.slider.slickNext()
  }

  previous = () => {
    this.slider.slickPrev()
  }

  handleGoToSlide = (indxSlide) => {
    this.slider.slickGoTo(indxSlide) 
  }

  getColorSlide = (indxSlide = 0) => {
    let colorSlide = this.props.slider.slides[indxSlide].color
    this.props.actions.setColorSlide({ currentColor: colorSlide })
  }

  settings = {
    arrows: false,
    infinite: true,
    speed: null,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    cssEase: 'fade',
    afterChange: (currSlide) => {
      this.setState({ currSlide: currSlide })
      this.getColorSlide(currSlide)
    }
  }

  render() {
    return (
      <div className='slider'>
        <SliderDotsWrapper
          color={this.props.slider.currentColor}
          slides={this.props.slider.slides}
          currSlide={this.state.currSlide}
          handleGoToSlide={this.handleGoToSlide.bind(this)}
        />
        <div className='slider-container'>
          <Slider {...this.settings} ref={(input) => { this.slider = input }}>
            {this.props.children}
          </Slider>
          <LeftNavButton 
            onClick={this.previous}
            color={this.props.slider.currentColor} 
          />
          <RightNavButton 
            onClick={this.next}
            color={this.props.slider.currentColor}
          />
        </div>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(MySlider)
