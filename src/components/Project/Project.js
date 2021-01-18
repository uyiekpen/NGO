import React from 'react'
import { Link } from 'react-router-dom';
import { App } from "../../base"
// import ProjectModal from "../Project/ProjectModal"
// import { ArrowRightOutlined } from 'antd';
// import { ArrowRightOutlined } from '@ant-design/icons'



const db = App.firestore()

function Event() {
  // const [fileUrl, setFileUrl] = React.useState(null);
  // const [body, setbody] = React.useState("");
  // const [title, settitle] = React.useState("");
  const [data, setData] = React.useState([]);



  // const imageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const storeRef = app.storage().ref();
  //   const fileRef = storeRef.child(file.name);
  //   await fileRef.put(file);
  //   setFileUrl(await fileRef.getDownloadURL());
  // };

  const getData = async () => {
    await db.collection("Thrives")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setData(items);
      });
  };
  console.log(data);
  React.useEffect(() => {
    getData();
  }, []);


  return (
    <div style={{
    }}>
      <center>
        <h1>Projects</h1>
      </center>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        color: "white"

      }} >

        {data.map(({ avatar, title, body }) => (
          <div style={{
            display: "flex",
            flexDirection: "column",

          }}>
            <div >
              <img src={avatar} alt={title}
                style={{
                  height: "300px",
                  width: "430px",
                  objectFit: "cover",
                  opacity: "50%"

                }}
              />
            </div>
            <div style={{
              height: "150px",
              width: "400px",
              fontFamily: "poppins",
              textAlign: "center",
            }}>
              <p
                style={{
                  textTransform: "uppercase",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "black",
                  lineHeight: "40px"

                }}> {title}</p>

            </div>

          </div>
        ))}

        <div>
          {/* <ArrowRightOutlined /> */}

        </div>
      </div>
      <Link to="/Event" style={{
        textDecoration: "none"

      }}><center><button
        style={{
          height: "40px",
          width: "150px",
          backgroundColor: "#FCAD31",
          border: "none",
          marginBottom: "40px",
          textDecoration: "none"
        }}
      >See More</button></center></Link>
    </div>
  )
}

export default Event
