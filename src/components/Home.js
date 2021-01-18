import React from "react";
import ModalButton from "./Body/Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";
import PI from "./PI/Moving"
import Project from "./Project/Project"
import Vision from "./Vision/Vision";
import HomeCont1 from "./HomeCont1/HomeCont1"
import More from "./More/More"
import Team from "./Team/Team";
// import Embedded from "./Embedded/Embedded"

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      {/* <HeroSection /> */}
      <PI />
      {/* <Vision /> */}
      <HomeCont1 />
      {/* <More /> */}
      {/* <Embedded /> */}
      <Team />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
