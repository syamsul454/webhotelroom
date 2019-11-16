import React from 'react'
import {Carousel} from 'antd';
import './index.css'
const banner =  () => {
    return (
        <div className= 'banner'>
        <Carousel autoplay>
        <div>
        <img className='img' alt='icon' src="https://placeimg.com/1000/300/arch/sepia"/>
       
        </div>
        <div>
        <img className='img' alt='icon' src="https://placeimg.com/1000/300/nature/grayscale"/>
        </div>
        <div>
        <img className='img' alt='icon' src="https://images4.alphacoders.com/814/thumb-1920-81446.jpg"/>
        </div>
        <div>
        <img className='img' alt='icon' src=" https://images.alphacoders.com/270/thumb-1920-270963.jpg"/>
        </div>
      </Carousel>
      </div>
    )
}

export default banner
