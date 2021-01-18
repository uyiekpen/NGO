import React from 'react'
import Footer from '../Footer'
import NavBar from "../NavBar"
import SideBar from '../SideBar/SideBar'
import pic from "./Img/codex.jpg"
import pic1 from "./Img/homey.jpg"
import "../Mission/Mission.css"

function Mission() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div style={{
        marginTop: "80px"
      }}>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
      </div>
      <div className="Missiodivn">
        <div className="Missiodivn1">
          <strong
          >Our Mission</strong>
          <p >The world is tough, its even tougher when you are a woman.
          No one want to give you a try because they think you ain't competent enough, smart enough or even good enough to handle the try.
          These has made a lot of ladies to be put on the back sit and it has in many ways limit the abilities of what a woman is capable of...
          However, few of us has Thrive... We've risen above the noise, beyond the back sit and because we, we want to help other thrive as well.
            <br />One way we are doing this, is through the
            SheCodes: where we are training young ladies to become a software developer, training them on both Mobile and Web development.
SheLearns: this program is so dare to us because we've realized that a lot of young girls do not have basic primary education... That's where the SheLearns program comes to aid, this program is design put young girls back to school, in order for them to have basic primary education.</p>
        </div>
        <div className="Missiodivn2">
          <div className="Team">
            <img className="MissIn"
              src={pic}
              alt="girl.jpg" />
          </div>
          <div className="MissIn1">
            <img className="MissIn2"
              src={pic1}
              alt="girl.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mission
