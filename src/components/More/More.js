import React from 'react'
import "./More.css"
import img1 from "../More/Image/codex.jpg"
import img2 from "../More/Image/she.jpg"
import img3 from "../More/Image/team.jpg"

function More() {
  return (
    <div>
      <div className="ProjectDiv">
        <div className="ProjectDivText">
          Project
        </div>
        <div className="ProjectImageWrapper">
          <div className="ProjectImageWrapper1">
            <img className="ProjectImagediv" src={img1} alt="girl.png" />
            <div className="Projecttext">SheCodes Ajegunle</div>
          </div>
          <div className="ProjectImageWrapper1">
            <img className="ProjectImagediv" src={img2} alt="girl.png" />
            <div className="Projecttext" >Celebration of the international day of girl child</div>
          </div>
          <div className="ProjectImageWrapper1">
            <img className="ProjectImagediv" src={img3} alt="girl.png" />
            <div className="Projecttext">Feeding of 250 kids in Ajegunle</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default More
