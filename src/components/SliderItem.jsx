import React, { Component } from 'react'
import AutoLinkText from 'react-autolink-text'

export default  class SliderItem extends Component {
    render () {
        const { id, title, subtitle, currentColor }  = this.props
        return (
            <div className='slider__slide'>
              <div className="slider__slide-inner">
                <div className={`slider__slide-img slider__slide-img-${id}`}></div>
              </div>
              <div className='slider__slide-text'>
                <div className='slider__slide-title' style={{color: currentColor}}>{title}</div>
                  <div className='slider__slide-subtitle'>
                    <AutoLinkText text={subtitle} />
                  </div>
              </div>
            </div>
        )
    }
}