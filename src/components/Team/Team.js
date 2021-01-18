import React from 'react'
import team from "./Image/osa.jpg"
import team1 from "./Image/team 1.jpg"
import team2 from "./Image/team 2.jpg"


function Team() {
  return (
    <div style={{
      background: "#E9ECEF"
    }}>
      <center>
        <h1>Meet the team</h1>
      </center>
      <div style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-around",
        flexWrap: "wrap",

      }}>
        <div>
          <img src={team1} alt="bukky.jpg"
            style={{
              height: "250px",
              width: "270px",
              boxShadow: "0 4px 8px 0",
              objectFit: "cover",
              marginLeft: "20px",
              borderRadius: "270px",
              lineHeight: "40px",
              marginTop: "40px"




            }}
          />
          <center style={{
            marginBottom: "50px",
            marginTop: "40px",
            fontWeight: "bold"



          }} >
            Bukola Gbemi<br />
            Co-Founder SheThrives
          </center>
        </div>
        <div>
          <img src={team2} alt="bukky.jpg"
            style={{
              height: "250px",
              width: "270px",
              boxShadow: "0 4px 8px 0",
              objectFit: "cover",
              marginLeft: "20px",
              borderRadius: "300px",
              textTransform: "capitalize",
              fontFamily: "poppins",
              lineHeight: "40px",
              marginTop: "40px"



            }}
          />
          <center style={{
            marginBottom: "50px",
            marginTop: "40px", fontWeight: "bold"




          }}>
            Oma Alele Grace<br />

          </center>
        </div>
        <div>
          <img src={team} alt="bukky.jpg"
            style={{
              height: "250px",
              width: "270px",
              boxShadow: "0 4px 8px 0",
              objectFit: "cover",
              marginLeft: "20px",
              borderRadius: "270px",
              marginTop: "40px"




            }}
          />
          <center style={{
            marginBottom: "50px",
            marginTop: "40px",
            fontWeight: "bold"


          }}>
            Uyiekpen Osazie Elizabeth<br />
          </center>
        </div>
      </div>
    </div>
  )
}

export default Team
