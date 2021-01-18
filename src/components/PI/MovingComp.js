import React from 'react'
import img1 from "../PI/Image/2.jpg"

function MovingComp({ img, direction, BGcolor, Buttcolor, title, desc }) {
  return (
    <div>
      <div style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "600px",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "600px",
            backgroundColor: BGcolor,
            color: "white",
            fontFamily: "Poppins",
            justifyContent: "center",
            alignItems: direction,
            padding: "0 50px",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              textTransform: "uppercase",
              margin: "0px",
              width: "400px",
              lineHeight: "0.7",
            }}
          >
            {title}
          </div>
          <div style={{
            width: "400px",
          }}
          >
            {desc}
          </div>
          <button
            style={{
              width: "200px",
              height: "40px",
              textTransform: "uppercase",
              background: Buttcolor,
              color: "white",
              borderRadius: "4px",
              boxShadow: "20px",
              border: "none"
            }}
          >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default MovingComp
