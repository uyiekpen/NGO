import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import pix from "../PI/Image/2.jpg"
import pix1 from "../PI/Image/12.jpg"
import pix2 from "../PI/Image/shecosdes.jpg"
import pix3 from "../PI/Image/b81.jpg"
import pix5 from "../PI/Image/team 1.jpg"
import MovingComp from './MovingComp';


const contentStyle = {
  // height: '550px',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
};





function Moving() {
  return (
    <Carousel autoplay effect="fade">
      <div style={contentStyle} >
        <h3 style={contentStyle}></h3>
        <MovingComp
          img={pix}
          title="WHAT WE DO"
          desc="Empowering women with the technical skills to Bridge the gap and curb teenage pregnancy"
          direction="flex-end"
          BGcolor="rgba(188 ,237 ,241, 0.75)"
          Buttcolor="rgb(188 ,237 ,241)"

        />
      </div>
      <div>
        <h3 style={contentStyle}></h3>
        <MovingComp
          img={pix1}
          title="WHAT WE DO"
          desc="Empowering women with the technical skills to Bridge the gap and curb teenage pregnancy"
          direction="flex-start"
          BGcolor="rgba(253 ,214 ,175, 0.75)"
          Buttcolor="rgb(253 ,214 ,175)"


        />
      </div>
      <div>
        <h3 style={contentStyle}></h3>
        <MovingComp
          img={pix2}
          title="WHAT WE DO"
          desc="Empowering women with the technical skills to Bridge the gap and curb teenage pregnancy"
          direction="flex-end"
          BGcolor="rgba(244 ,183 ,120, 0.75)"
          Buttcolor="rgb(244 ,183 ,120)"




        />
      </div>
      <div>
        <h3 style={contentStyle}></h3>
        <MovingComp
          img={pix3}
          title="WHAT WE DO"
          desc="Empowering women with the technical skills to Bridge the gap and curb teenage pregnancy"
          direction="center"
          BGcolor="rgba(176 ,115 ,77, 0.75)"
          Buttcolor="rgb(176 ,115 ,77)"


        />
      </div>


    </Carousel>
  )
}

export default Moving
