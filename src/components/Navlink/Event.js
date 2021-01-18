import React from 'react'
import { App } from "../../base"
import Footer from '../Footer';
import NavBar from '../NavBar';
import SideBar from '../SideBar/SideBar';


const db = App.firestore()

function Event() {
  // const [fileUrl, setFileUrl] = React.useState(null);
  // const [body, setbody] = React.useState("");
  // const [title, settitle] = React.useState("");
  const [data, setData] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);



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

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div>
      <div style={{
        marginTop: "80px"
      }}>>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
      </div>

      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
          flexWrap: "wrap",
          paddingBottom: "0px 40px"

        }} >
          {data.map(({ avatar, title, body }) => (
            <div style={{
              display: "flex",
              flexDirection: "column",

            }}>
              <div >
                <img src={avatar} alt={title}
                  style={{
                    height: "400px",
                    width: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",

                  }}
                />
              </div>
              <div style={{
                height: "350px",
                width: "400px",
                fontFamily: "poppins"
              }}>
                <p
                  style={{
                    textTransform: "uppercase",
                    fontSize: "25px",
                    fontWeight: "bold"

                  }}> {title}</p>
                <div
                  style={{
                    textTransform: "capitalize",

                  }}
                >{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Event
